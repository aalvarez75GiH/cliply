import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { TextInput } from "react-native-paper";

/**
 * Props (all optional):
 * - length        number  default 4
 * - value         string  controlled value
 * - onChange      func    (pin) => void
 * - onFulfill     func    (pin) => void  // when all digits filled
 * - secure        bool    default true
 * - autoFocus     bool    default true (first box)
 * - disabled      bool
 * - error         bool
 * - theme         any     react-native-paper theme
 */
export const PinCodeInput = (props) => {
  const {
    length = 4,
    value,
    onChange,
    onFulfill,
    secure = true,
    autoFocus = true,
    disabled,
    error,
    theme,
  } = props;

  const [digits, setDigits] = useState(
    Array.from({ length }, (_, i) => (value && value[i]) || "")
  );
  const refs = useRef([]);

  // keep internal state in sync if parent controls `value`
  useEffect(() => {
    if (typeof value === "string") {
      const next = Array.from({ length }, (_, i) => value[i] || "");
      setDigits(next);
    }
  }, [value, length]);

  const combined = useMemo(() => digits.join(""), [digits]);

  useEffect(() => {
    onChange && onChange(combined);
    if (combined.length === length && !combined.includes("")) {
      onFulfill && onFulfill(combined);
    }
  }, [combined, length, onChange, onFulfill]);

  const focusNext = (idx) => refs.current[idx + 1]?.focus();
  const focusPrev = (idx) => refs.current[idx - 1]?.focus();

  const handleChange = (text, idx) => {
    const onlyDigits = text.replace(/\D/g, "");

    // paste case (e.g., "1234")
    if (onlyDigits.length > 1) {
      const next = [...digits];
      for (let i = 0; i < onlyDigits.length; i++) {
        const target = idx + i;
        if (target >= length) break;
        next[target] = onlyDigits[i] || "";
      }
      setDigits(next);
      const last = Math.min(idx + onlyDigits.length - 1, length - 1);
      refs.current[last]?.focus();
      return;
    }

    const next = [...digits];
    next[idx] = onlyDigits;
    setDigits(next);
    if (onlyDigits && idx < length - 1) focusNext(idx);
  };

  const handleKeyPress = (e, idx) => {
    if (e?.nativeEvent?.key === "Backspace") {
      if (digits[idx]) {
        const next = [...digits];
        next[idx] = "";
        setDigits(next);
      } else if (idx > 0) {
        focusPrev(idx);
        const prev = [...digits];
        prev[idx - 1] = "";
        setDigits(prev);
      }
    }
  };

  return (
    <View style={styles.row}>
      {Array.from({ length }).map((_, idx) => (
        <TextInput
          key={idx}
          ref={(r) => (refs.current[idx] = r)}
          mode="outlined"
          value={digits[idx]}
          onChangeText={(t) => handleChange(t, idx)}
          onKeyPress={(e) => handleKeyPress(e, idx)}
          style={styles.box}
          contentStyle={styles.boxContent}
          disabled={disabled}
          error={!!error}
          maxLength={1}
          secureTextEntry={secure}
          keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
          inputMode="numeric"
          textContentType="oneTimeCode"
          autoComplete="one-time-code"
          importantForAutofill="yes"
          returnKeyType="done"
          autoFocus={autoFocus && idx === 0}
          theme={theme}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 12, // or use `gap: 12` if your RN supports it
  },
  box: {
    width: 56,
    height: 56,
  },
  boxContent: {
    textAlign: "center",
    fontSize: 24,
    lineHeight: 24,
  },
});
