export const food_delivery_operation_data = {
  food_delivery_operation: [
    {
      operation_status: [
        {
          status_name: "Heading to pickup/shop",
          status_id: "CLP_FD_OP_0001",
          createdAt: "2024-10-05T12:00:00Z",
          updatedAt: "2024-10-05T12:00:00Z",
          splitted_name: {
            caption_1_en: "heading to",
            caption_2_en: "pickup/shop",
            caption_1_es: "Yendo a",
            caption_2_es: "recoger/comprar",
          },
          stored_messages: [
            {
              message_id: "CLP_0001",
              summary_en: "May message you with order updates.",
              summary_es:
                "Podria enviarte mensajes con actualizaciones de tu orden.",
              message_en:
                "Hi, this is your driver here. be aware that i could be sending messages about your order ok?",
              message_es:
                " Hola, este es tu conductor aquí. Ten en cuenta que podría enviarte mensajes sobre tu orden, ¿ok?",
              used: 0,
              language_detected: "ES",
              original_message:
                "Hola, este es tu conductor aquí. Ten en cuenta que podría enviarte mensajes sobre tu orden, ¿ok?",
            },
          ],
        },
        {
          status_name: "Picking up / Shopping",
          status_id: "CLP_FD_OP_0002",
          createdAt: "2024-10-05T12:00:00Z",
          updatedAt: "2024-10-05T12:00:00Z",
          splitted_name: {
            caption_1_en: "picking up",
            caption_2_en: "Shopping",
            caption_1_es: "Recogiendo o",
            caption_2_es: "Comprando",
          },
          stored_messages: [
            {
              message_id: "CLP_0001",
              summary_en: "I am picking up your order now.",
              summary_es: "Estoy recogiendo tu orden ahora.",
              message_en:
                "Hello, I am at the restaurant/store now picking up your order. I will be on my way shortly.",
              message_es:
                "Hola, estoy en el restaurante/tienda ahora recogiendo tu orden. Estaré en camino en breve.",
              used: 0,
              language_detected: "ES",
              original_message:
                "Hola, estoy en el restaurante/tienda ahora recogiendo tu orden. Estaré en camino en breve.",
            },
            {
              message_id: "CLP_0002",
              summary_en: "May message you with order updates.",
              summary_es:
                "Podria enviarte mensajes con actualizaciones de tu orden.",
              message_en:
                "Hi, this is your driver here. be aware that i could be sending messages about your order ok?",
              message_es:
                " Hola, este es tu conductor aquí. Ten en cuenta que podría enviarte mensajes sobre tu orden, ¿ok?",
              used: 0,
              language_detected: "ES",
              original_message:
                "Hola, este es tu conductor aquí. Ten en cuenta que podría enviarte mensajes sobre tu orden, ¿ok?",
            },
            {
              message_id: "CLP_0003",
              summary_en: "Item unavailable—please confirm substitute.",
              summary_es:
                "Artículo no disponible, por favor confirma el sustituto.",
              message_en:
                "Hi. For some reasons here at the store they ran out of this product. I sent to you a substitute, can you check it out and confirm it or deny it?",
              message_es:
                "Hola. Por alguna razón aquí en la tienda se quedaron sin este producto. Te envié un sustituto, ¿puedes revisarlo y confirmarlo o negarlo?",
              used: 0,
              language_detected: "EN",
              original_message:
                "Hi. For some reasons here at the store they ran out of this product. I sent to you a substitute, can you check it out and confirm it or deny it?",
            },
            {
              message_id: "CLP_0004",
              summary_en: "Waiting on your response to substitutions.",
              summary_es: "Esperando tu respuesta sobre sustituciones.",
              message_en:
                "I am wating for you to check out the substitutions i sent, thanks.",
              message_es:
                "Estoy esperando que revises las sustituciones que envié, gracias.",
              used: 0,
              language_detected: "EN",
              original_message:
                "I am wating for you to check out the substitutions i sent, thanks.",
            },
            {
              message_id: "CLP_0005",
              summary_en: "Restaurant issue with order—will update soon.",
              summary_es:
                "Problema con el pedido del restaurante, actualizaré pronto.",
              message_en:
                "Hi. For some reason here at the restaurant they are having issues with your order, i’ll let you know if they fixed it ok?",
              message_es:
                "Hola. Por alguna razón aquí en el restaurante están teniendo problemas con tu pedido, te avisaré si lo solucionan, ¿ok?",
              used: 0,
              language_detected: "ES",
              original_message:
                "Hola. Por alguna razón aquí en el restaurante están teniendo problemas con tu pedido, te avisaré si lo solucionan, ¿ok?",
            },
            // Additional messages here...
          ],
        },
        {
          status_name: "Heading to drop off",
          status_id: "CLP_FD_OP_0003",
          createdAt: "2024-10-05T12:00:00Z",
          updatedAt: "2024-10-05T12:00:00Z",
          splitted_name: {
            caption_1_en: "Heading to",
            caption_2_en: "Dropp off",
            caption_1_es: "Yendo a",
            caption_2_es: "entregar",
          },
          stored_messages: [
            {
              message_id: "CLP_0001",
              summary_en: "Your order is on the way.",
              summary_es: "Tu orden está en camino.",
              message_en:
                "Hi, just wanted to let you know that I am on my way to deliver your order. I should be there soon.",
              message_es:
                "Hola, solo quería informarte que estoy en camino para entregar tu orden. Debería llegar pronto.",
              used: 0,
              language_detected: "ES",
              original_message:
                "Hola, solo quería informarte que estoy en camino para entregar tu orden. Debería llegar pronto.",
            },
            {
              message_id: "CLP_0002",
              summary_en: "En route, delayed by traffic.",
              summary_es: "En camino, retrasado por el tráfico.",
              message_en: "On my way, too much traffic",
              message_es: " En camino, demasiado tráfico",
              used: 0,
              language_detected: "EN",
              original_message: "On my way, too much traffic",
            },
            {
              message_id: "CLP_0003",
              summary_en: "Missed message about extras—already en route.",
              summary_es: "Mensaje no visto sobre extras, ya en camino.",
              message_en:
                "Hi. For some reasons i couldn’t read your message about the extras you needed and i am heading to your place already, sorry",
              message_es:
                "Hola. Por alguna razón no pude leer tu mensaje sobre los extras que necesitabas y ya estoy en camino a tu lugar, lo siento",
              used: 0,
              language_detected: "ES",
              original_message:
                "Hola. Por alguna razón no pude leer tu mensaje sobre los extras que necesitabas y ya estoy en camino a tu lugar, lo siento",
            },
            {
              message_id: "CLP_0004",
              summary_en: "GPS issue—need help finding your location",
              summary_es:
                "Problema con GPS, necesito ayuda para encontrar tu ubicación",
              message_en:
                "Sorry, GPS is a little bit crazy right now and i can’t find your place. Can you elaborate more about where you live?",
              message_es:
                "Lo siento, el GPS está un poco loco en este momento y no puedo encontrar tu lugar. ¿Puedes darme más detalles sobre dónde vives?",
              used: 0,
              language_detected: "EN",
              original_message:
                "Sorry, GPS is a little bit crazy right now and i can’t find your place. Can you elaborate more about where you live?",
            },
            {
              message_id: "CLP_0005",
              summary_en: "Checking if building access is allowed late.",
              summary_es:
                "Comprobando si se permite el acceso al edificio tarde.",
              message_en:
                "Hi. this is your driver here. Do you know if i have access to the building? Sometimes when is too late we are not allowed to come up.",
              message_es:
                "Hola. Este es tu conductor aquí. ¿Sabes si tengo acceso al edificio? A veces, cuando es muy tarde, no se nos permite subir.",
              used: 0,
              language_detected: "EN",
              original_message:
                "Hi. this is your driver here. Do you know if i have access to the building? Sometimes when is too late we are not allowed to come up.",
            },
            {
              message_id: "CLP_0006",
              summary_en: "Very close, be ready for handoff",
              summary_es: "Muy cerca, listo para entrega",
              message_en:
                "Hi. I am on my way but actually i am very close, be ready just in case you need the food in your hands, ok?",
              message_es:
                "Hola. Estoy en camino, pero de hecho estoy muy cerca. Prepárate por si necesitas tener la comida en tus manos, ¿ok?",
              used: 0,
              language_detected: "EN",
              original_message:
                "Hi. I am on my way but actually i am very close, be ready just in case you need the food in your hands, ok?",
            },
            {
              message_id: "CLP_0007",
              summary_en: "Running late due to multiple orders",
              summary_es: "Llegando tarde debido a múltiples órdenes",
              message_en:
                "Hi. This is your driver here. I am working in multiple orders at the same time, so i could be late, i am gonna try to be there soon ok?",
              message_es:
                "Hola. Este es tu conductor aquí. Estoy trabajando en múltiples órdenes al mismo tiempo, así que podría llegar tarde, voy a intentar estar allí pronto, ¿ok?",
              used: 0,
              language_detected: "EN",
              original_message:
                "Hi. This is your driver here. I am working in multiple orders at the same time, so i could be late, i am gonna try to be there soon ok?",
            },
            // Additional messages here...
          ],
        },
      ],
    },
  ],
};

export const ride_share_operation_data = {
  ride_share_operation: [
    {
      operation_status: [
        {
          status_name: "Heading to Passenger",
          status_id: "CLP_FD_OP_0001",
          createdAt: "2024-10-05T12:00:00Z",
          updatedAt: "2024-10-05T12:00:00Z",
          splitted_name: {
            caption_1_en: "Heading to",
            caption_2_en: "Passenger",
            caption_1_es: "Yendo a que el",
            caption_2_es: "pasajero",
          },
          stored_messages: [
            {
              message_id: "CLP_0001",
              summary_en: "I am on my way to pick you up.",
              summary_es: "Estoy en camino para recogerte.",
              message_en:
                "Hello, this is your driver. I am on my way to pick you up now and should arrive shortly.",
              message_es:
                "Hola, este es tu conductor. Estoy en camino para recogerte ahora y debería llegar en breve.",
              used: 0,
              language_detected: "ES",
              original_message:
                "Hola, este es tu conductor. Estoy en camino para recogerte ahora y debería llegar en breve.",
            },
            {
              message_id: "CLP_0002",
              summary_en: "Making quick stop for gas/restroom before pickup.",
              summary_es:
                "Haciendo una parada rápida para gasolina/baño antes de la recogida.",
              message_en:
                "Look i need to put some gas in my car and use a restroom. didn’t have plans to go take such a long drive so i am doing that before picking you up, is that ok?",
              message_es:
                " Mira, necesito poner gasolina a mi carro y usar un baño. No tenía planes de hacer un viaje tan largo, así que estoy haciendo eso antes de recogerte, ¿está bien?",
              used: 0,
              language_detected: "EN",
              original_message:
                "Look i need to put some gas in my car and use a restroom. didn’t have plans to go take such a long drive so i am doing that before picking you up, is that ok?",
            },
            {
              message_id: "CLP_0003",
              summary_en: "No open food in car—please keep it sealed.",
              summary_es:
                "Sin cajas de comida abiertas en el carro, por favor mantenla sellada.",
              message_en:
                "Hi. This is your driver. Please, not open containers or unpacked food inside of the car ok? All food must be kept inside of the boxes or containers, Thanks",
              message_es:
                " Hola. Este es tu conductor. Por favor, no contenedores abiertos o comida sin empaquetar dentro del carro, ¿ok? Toda la comida debe mantenerse dentro de las cajas o contenedores, gracias",
              used: 0,
              language_detected: "ES",
              original_message:
                "Hola. Este es tu conductor. Por favor, no contenedores abiertos o comida sin empaquetar dentro del carro, ¿ok? Toda la comida debe mantenerse dentro de las cajas o contenedores, gracias",
            },
            {
              message_id: "CLP_0004",
              summary_en: "Max 4 riders—please request XL if more.",
              summary_es:
                "Máximo 4 pasajeros, por favor solicita XL si son más.",
              message_en:
                "Hi, your driver here. Just a remainder, i can ride just 4 people ok? If you guys are more than 4 feel free to cancel and request an XL car",
              message_es:
                " Hola, tu conductor aquí. Solo un recordatorio, puedo llevar solo a 4 personas, ¿ok? Si son más de 4, siéntete libre de cancelar y solicitar un carro XL",
              used: 0,
              language_detected: "ES",
              original_message:
                "Hola, tu conductor aquí. Solo un recordatorio, puedo llevar solo a 4 personas, ¿ok? Si son más de 4, siéntete libre de cancelar y solicitar un carro XL",
            },
            {
              message_id: "CLP_0005",
              summary_en: "Pet allowed—please ensure clean paws.",
              summary_es:
                "Mascota permitida, por favor asegúrate de que sus patas estén limpias.",
              message_en:
                "Hi, your driver here. I understand you are carrying a pet. Be sure its paws are clean ok?",
              message_es:
                " Hola, tu conductor aquí. Entiendo que llevas una mascota. ¿Asegúrate de que sus patas estén limpias, ok?",
              used: 0,
              language_detected: "EN",
              original_message:
                "Hi, your driver here. I understand you are carrying a pet. Be sure its paws are clean ok?",
            },
            {
              message_id: "CLP_0006",
              summary_en: "Keep food sealed—no open containers in car.",
              summary_es:
                "Mantén la comida sellada, no contenedores abiertos en el carro.",
              message_en:
                "Hi. This is your driver. Please, not open containers or unpacked food inside of the car ok? All food must be kept inside of the boxes or containers, Thanks",
              message_es:
                " Hola. Este es tu conductor. Por favor, no contenedores abiertos o comida sin empaquetar dentro del carro, ¿ok? Toda la comida debe mantenerse dentro de las cajas o contenedores, gracias",
              used: 0,
              language_detected: "EN",
              original_message:
                "Hi. This is your driver. Please, not open containers or unpacked food inside of the car ok? All food must be kept inside of the boxes or containers, Thanks",
            },
            {
              message_id: "CLP_0007",
              summary_en: "Checking if building access is allowed late.",
              summary_es:
                "Comprobando si se permite el acceso al edificio tarde.",
              message_en:
                "Hi. this is your driver here. Do you know if i have access to the building? Sometimes when is too late we are not allowed to come up.",
              message_es:
                "Hola. Este es tu conductor aquí. ¿Sabes si tengo acceso al edificio? A veces, cuando es muy tarde, no se nos permite subir.",
              used: 0,
              language_detected: "EN",
              original_message:
                "Hi. this is your driver here. Do you know if i have access to the building? Sometimes when is too late we are not allowed to come up.",
            },
          ],
        },
        {
          status_name: "Close to Passenger",
          status_id: "CLP_FD_OP_0001",
          createdAt: "2024-10-05T12:00:00Z",
          updatedAt: "2024-10-05T12:00:00Z",
          splitted_name: {
            caption_1_en: "Close to",
            caption_2_en: "Passenger",
            caption_1_es: "Cerca del",
            caption_2_es: "pasajero",
          },
          stored_messages: [
            {
              message_id: "CLP_0001",
              summary_en: "I am close to your location.",
              summary_es: "Estoy cerca de tu ubicación.",
              message_en:
                "Hi, just wanted to let you know that I am close to your location and will be arriving soon.",
              message_es:
                "Hola, solo quería informarte que estoy cerca de tu ubicación y llegaré pronto.",
              used: 0,
              language_detected: "ES",
              original_message:
                "Hola, solo quería informarte que estoy cerca de tu ubicación y llegaré pronto.",
            },
            {
              message_id: "CLP_0002",
              summary_en: "Be ready—traffic and parking are difficult.",
              summary_es:
                "Prepárate, el tráfico y el estacionamiento son difíciles.",
              message_en:
                "Hi. This is your driver here. be ready ok? There is too much traffic and parking could be very tricky",
              message_es:
                "Hola. Este es tu conductor aquí. Prepárate, ¿ok? Hay mucho tráfico y el estacionamiento podría ser muy complicado",
              used: 0,
              language_detected: "EN",
              original_message:
                "Hi. This is your driver here. be ready ok? There is too much traffic and parking could be very tricky",
            },
          ],
        },
        {
          status_name: "At Passengers location",
          status_id: "CLP_FD_OP_0001",
          createdAt: "2024-10-05T12:00:00Z",
          updatedAt: "2024-10-05T12:00:00Z",
          splitted_name: {
            caption_1_en: "At Pasaanger`s",
            caption_2_en: "location",
            caption_1_es: "En la ubicación del",
            caption_2_es: "pasajero",
          },
          stored_messages: [
            {
              message_id: "CLP_0001",
              summary_en: "I have arrived at the pickup location.",
              summary_es: "He llegado al lugar de recogida.",
              message_en:
                "Hello, I have arrived at the pickup location. Please come out when you're ready.",
              message_es:
                "Hola, he llegado al lugar de recogida. Por favor, sal cuando estés listo.",
              used: 0,
              language_detected: "ES",
              original_message:
                "Hola, he llegado al lugar de recogida. Por favor, sal cuando estés listo.",
            },
          ],
        },
      ],
    },
  ],
};
