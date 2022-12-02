import { Capitulo } from "../model/capitulo";

export let datos: Capitulo[] = [
    {
        numero: 1, 
        titulo: "CONTROL PRENATAL",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZkY4hdoThA-BNlBCLZiZjB3hvG_XIm7gKg&usqp=CAU",
        texto: [
            "Es el conjunto de actividades y accciones que se le realiza a la mujer en estado de gestación, con el objetivo de lograr una buena salud materna, desarrollo normal del feto y promover un parto y nacimiento en optimas condiciones.",
            "Para evaluar la salud de la gestante, determinar el riesgo de su embarazo con base en su historia clinica completa y tomar las acciones pertinentes para obtener un resultado satisfactorio de la gestación, el control prenatal debe inicia antes de las 10 semanas de embarazo"
        ],
        subcapitulo: [
            {
                titulo: "Actividades y acciones del control prenatal",
                texto: [
                    "Consulta médica y de enfermería",
                    "Consulta odontológica",
                    "Consulta de nutrición",
                    "Asesoría en lactancia materna y planificación familiar",
                    "Estudíos paraclínicos",
                    "Curso de preparación para la maternidad y paternidad",
                    "Direccionamiento para la atención del parto"
                ]
            }
        ]
    },
    {
        numero: 2,
        titulo: "SIGNOS DE ALARMA",
        imagen: "https://reader008.dokumen.tips/reader008/html5/091403/613fb6dc88641/613fb6de1b885.jpg",
        texto: [
            "Es de suma importancia que usted conozca los signos de alarma que pueden llegar a presentarse durante el embarazo. Si usted presenta alguno de estos síntomas consulte inmediatamente a un servicio de urgencias."
        ],
        subcapitulo: [
            {
                titulo: "Síntomas",
                texto: [
                    "Aumento de peso exagerado (más de dos kilogramos en una semana).",
                    "Hinchazón o edema marcado en los pies, las manos y la cara.",
                    "Visión alterada (visión borrosa, manchas)",
                    "Disminución en la cantidad de orina.",
                    "Ardor al orinaru orina fétida.",
                    "Vómito incontrolable.",
                ]
            }
        ]
    },
    {
        numero: 3,
        titulo: "EL CUIDADO DE LOS DIENTES",
        imagen: "https://www.federacion-matronas.org/wp-content/uploads/2021/04/174628969_3954871924548181_3223032218152985991_n.jpg",
        texto: [
            "EL aumento y aparición de nuevas sustancias químicas en su sangre(hormonas) durante el embarazo, producen cambios en las encías, una mayor cantidad de bacterias en éstas u gingivitis.",
            "Una buena higiene oral es vial para eliminar los residuos y prevenir la enfermedad en las encías."
        ]
    },
    {
        numero: 4,
        titulo: "RECOMENDACIONES NUTRICIONALES PARA GESTANTES",
        imagen: "https://cdn-cinfasalud.cinfa.com/wp-content/uploads/2019/07/CinfaSalud-alimentacion-embarazo-600-1200x800.jpg?x62802",
        texto: [
            "Una adecuada alimentación durante el período de gestación es uno de los pilares que garantizará un adecuado desarrollo y crecimiento del bebé.",
            "La mejor forma de promover un adecuado incremento de peso consiste en el consumo de una alimentación completa, suficiente, variada y equilibrada, controlando las porciones de los alimentos que se consumen, eligiendo alimentos de menor aporte calórico, además del consumo de agua y actividad física. A Continuación se presentan las recomendaciones para una mejor selección de alimentos y nutrición."
        ]
    },
    {
        numero: 5,
        titulo: "PILATES PARA SUPER MAMÁS",
        texto: [
            "La actividad fisica en el embarazo tiene grandes beneficios para la madre y el bebé, los siguientes son algunos de ellos:"
        ],
        imagen: "https://i.pinimg.com/550x/bf/1e/6e/bf1e6e682b301343ce7639a1b06c2a80.jpg",
        subcapitulo: [
            {
                titulo: "Beneficios para la madre",
                texto: [
                    "Disminuye el riesgo de presentar preclampsia, diabetes gestacional, sobrepeso, y dolor lumbar.",
                    "Disminuye el riesgo de tener complicaciones posparto: endometritis, infecciones de la herida quirúrgica, tromboflebitis, e infecciones del tracto urinario.",
                    "Le permite sentirse más ágil, con mayor adaptación al incremento del peso. Disminuye la incidencia de incontinencia urinaria tanto en el embarazo como en el post parto.",
                    "Mejora el estado de animo."
                ]
            },
            {
                titulo: "Beneficios para el bebé",
                texto: [
                    "Mejora la maduración del sistema nervioso.",
                    "Mejora la función de la placenta permitiendo el adecuado flujo de nutrientes.",
                    "Aumenta el líquido amniótico disminuyendo así el riesgo de parto prematuro."
                ]
            },
            {
                titulo: "Tenga en cuenta las siguientes recomendaciones",
                texto: [
                    "Elija un momento concreto del dia y una zona especifica de la casa para hacer los ejercicios.",
                    "Ningún ejercicio debe causar dolor.",
                    "El estado de sus músculos y el sistema cardiovascular determinan lo que puede hacer.",
                    "Al iniciar realice pocos ejercicios para aprender a conocerlos correctamente y luego aumente el número de repeticiones hasta donde sienta que no está forzando el organismo."
                ]
            }
        ]
    },
    {
        numero: 6,
        titulo: "LA ATENCIÓN DEL PARTO",
        imagen:"https://c8.alamy.com/compes/2ggmfx6/una-enfermera-afroamericana-que-monitorea-la-atencion-medica-de-una-mujer-embarazada-sentada-en-la-cama-del-hospital-adulto-con-embarazo-y-padre-de-nino-esperando-en-el-procedimiento-del-parto-del-bebe-en-la-maternidad-2ggmfx6.jpg",
        texto: [
            "Aproximadamente en la semana 34 de gestación, su médico la remitirá a valoración preanestésica y le entregará la orden para el parto que debe autorizar en una oficina de su EPS. Tenga en cuenta que debe presentar el volante de autorización el dia del parto. Una vez el médico le indique que se aproxima la fecha del parto, tenga en cuenta las siguientes recomendaciones:",
            "1. La orden que se le expide para la atención del parto debe ser tramitada lo más pronto posible.",
            "2. Esta orden la puede autorizar en cualquier oficina de Servicios Médicos de EPS de su ciudad.",
            "3. Para autorizar la orden debe llevar su documento de identidad y el carné de afiliación a su EPS.",
            "4. No olvide llevar el volante de autorización vigente, junto con su cédula, carné y dos bonos o cuotas moderadoras de asistencia médica para la clinica en que será atendida el día del parto.",
            "5. Cumpla las citas que le asigne su médico obstetra o enfermera y siga las instrucciones que le sean impartidas en esta institución."
        ],
        subcapitulo: [
            {
                titulo: "Documentos para el parto",
                imagen: "https://www.clinicaalemana.cl/img-blog/documentos.png",
                texto: [
                    "Documento de Identidad",
                    "Carné",
                    "Valoración pre-anestésica",
                    "Resultados de los exámenes practicados durante el embarazo.",
                    "Volante de Autorización vigente."
                ]

            },
            {
                titulo: "Elementos para el parto",
                imagen: "https://www.elpoderdelomega3.com/wp-content/uploads/2020/11/bigstock-Pregnant-Woman-And-Husband-Pac-239575468-1.jpg",
                texto: [
                    "Dos pijamas.",
                    "Un paquete de pañales desechables para adulto.",
                    "Un par de pantuflas.",
                    "Ropa interior cómoda y brasier de maternidad.",
                    "Un par de medias de lana.",
                    "Implementos de aseo personal.",
                    "Una muda de ropa para salir.",
                    "Importante: no lleve joyas, maquillaje, ni uñas pintadas."
                ]
                
            },
            {
                titulo: "Elementos para el bebé",
                imagen: "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/l/lista-para-maleta-de-hospital-parto-bebe.jpg",
                texto: [
                    "Tres camisetas de franela y tres camisas.",
                    "Tres mamelucos y/o sacos.",
                    "Un par de medias o patines",
                    "Un gorrito.",
                    "Dos cobertores.",
                    "Diez pañales desechables etapa 0.",
                    "Elementos de aseo para el bebé.",
                    "Un peine pequeno."
                ]
                
            }
        ]
    },
    {
        numero: 7,
        titulo: "LA LACTANCIA MATERNA",
        imagen: "https://sociedadmarce.org/IMAGES_35/breastfeeding-illustration.jpg",
        texto: [
            "Amamantar al bebé de forma exclusiva hasta los seis meses de edad y con alimentación complementaria hasta los dos años. Todo recién nacido de manera innata posee, entre otros"
        ],
        subcapitulo: [
            {
                titulo: "Reflejos",
                texto: [
                    "de Búsqueda: se identifica fácilmente cuando se acerca un objeto o el seno a la cara del bebé, quien inmediatamente lo busca con su boca.",
                    "de succión: se identifica cuando el seno de la madre o cualquier objeto es introducido en la boca del bebé y este realiza una succión instintiva. Inicie el amamantamiento inmediatamente, en la primera media hora después del parto.",
                    "de deglución: es el proceso de <<pasar>> o <<tragar>> que se presenta como respuesta a un estimulo."
                ]
            }
        ]
    },
    {
        numero: 8,
        titulo: "LA PLANIFICACIÓN FAMILIAR",
        imagen: "https://vitalia.zendesk.com/hc/article_attachments/6340999758483/Planificacion-familiar.png",
        texto: [
            "La planificación familiar es un derecho que tienen hombres y mujeres para definir cuándo y cuántos hijos desean tener. Para tal fin se han desarrollado métodos de planificación que garanticen el desarrollo de su sexualidad sin temores de embarazos no deseados o no planeados."
        ],
        subcapitulo: [
            {
                titulo: "Opciones durante las primeras 6 semanas",
                texto: [
                    "Ritmo",
                    "Temperatura basal",
                    "Mela (Método de la lactancia materna -amenorrea)",
                    "Métodos de barrera (preservativo masculino)",
                ]
            },
            {
                titulo: "Opciones después de las primeras 6 semanas a los 6 meses",
                texto: [
                    "Inyección trimestral",
                    "Anticonceptivos orales de solo progesterona",
                    "Dispositivo Intra uterino de cobre",
                    "Métodos de barrera (preservativo masculino)",
                    "Implante subdérmico hormonal"
                ]
            },
            {
                titulo: "Opciones después de los 6 meses",
                texto: [
                    "Inyección mensual o trimestral",
                    "Pildoras anticonceptivas combinadas o solas",
                    "Implante subdérmico hormonal",
                    "Dispositivo intra uterino de cobre",
                    "Mêtodos de barrera (preservativo masculino)",
                ]
            },
            {
                titulo: "Opciones Definitivos para cualquier momento",
                texto: [
                    "Ligadura de trompas",
                    "Vasectomía"
                ]
            }
        ]
    },
    {
        numero: 9,
        titulo: "EL RECIÉN NACIDO",
        imagen: "http://www.unbosque.edu.co/sites/default/files/2020-09/Recien%20nacido.jpg",
        texto: [
            "La espera de un hijo es un evento relevante para la familia gestante, esto representa edificarse en nuevo rol y ahora, por fin, llega el momento de ese maravilloso encuentro en el que los padres y su recién nacido ahanzaran el vinculo que han venido construyendo desde la gestaON, ese primer instante del contacto piel a piel les permitirá descubrir lo fascinarnite de este nuevo proceso."
        ],
        subcapitulo: [
            {
                titulo: "Consulta de Control",
                imagen: "https://images.ctfassets.net/bekpciakv9dp/sPoxgM1KOeEVZCkYRLBFe/26632b4260db1cafa23af95135f9cb57/A124.jpeg",
                texto: [
                    "Debe ser llevada a cabo por un médico 72 horas despues del nacimiento",
                    "Exammen Físico completo para el bebe",
                    "Evaluación de los cuidados maternos (Técnica de lactancia materna)",
                    "Reclamar resultado laboratorio prueba de TSH en la clínica u hospital donde fue atendido el parto.",   
                ]
            },
            {
                titulo: "La Alimentación",
                imagen: "https://cpbebes.com/wp-content/uploads/2020/07/lactancia-1.jpg",
                texto: [
                    "La alimentación para el bebé es la leche materna hasta los 6 meses, después el médico le indicará que alimentación suministrar al bebé.",
                    "Alimentar al bebé cada vez que lo pida de día y de noche",
                    "Los bebés recien nacidos y menos de un mes, NO debe permanecer más de 4 Horas en ayuno(Aproximado 8-12 tomas al día)",
                    "El bebé debe realizar succiones lentas",
                    "Vigilar el númeo de pañales mojados(6-8 pañales por día) y número de deposiciones en el día",
                
                ]
            },
            {
                titulo: "Baño del bebé",
                imagen: "https://i.ytimg.com/vi/-4VHKKQbCc8/hqdefault.jpg",
                texto: [
                    "Recomendable bañar al bebé antes de alimentarlo para evitar el vómito",
                    "Bañar al bebé con agua tibia(Probar siempre la temperatura)",
                    "Bañar al bebé con un jabón neutro de glicerina o avena",
                ]
            },
{
                titulo: "Precauciones Generales",
                imagen: "https://cdn-icons-png.flaticon.com/512/1553/1553224.png",
                texto: [
                    "El baño de los primeros días es corto (máximo cinco minutos). Hay que limpiar y secar bien pliegues y genitales.",
                    "Si aun no se le ha caído el cordón umbilical, limpie con un aplicador y con un antiséptico.",
                    "Para evitar descargas eléctricas, no coloque la bañera cerca de tomas o aparatos eléctricos conectados.",
                    "Tenga listos los elementos a utilizar.",
                    "El baño se debe realizar en un recinto cerrado. Evite las corrientes de aire",
                    "Nunca deje solo al bebé en la bañera por más seguro que parezca.",
                    "No llene la tina, utilice solamente el agua necesaria para evitar inmersiones.",
                    "Los elementos que se van a utilizar deben estar en óptimas condiciones.",
                    "El tiempo de duración del baño no debe superar los cinco minutos.",
                    "En la cara del bebé no se debe utilizar jabón, únicamente agua.",
                    "El agua que se utiliza en el baño del bebé no debe tener ninguna otra sustancia",
                ]
            },


        ]
    },
    {
        numero: 10,
        titulo: "LOS MÍNIMOS DEL CONTROL PRENATAL",
        imagen: "https://vacunacovid.gob.mx/wp-content/uploads/2021/05/EmbarazadaVacuna-1024x1024.png",
        texto: [
            ""
        ],
        subcapitulo: [
            {
                titulo: "Actividades Mínimas del CPN",
                imagen: "https://static.wixstatic.com/media/fdbca3_9d2c871b07b741eeb63351f3471c5b1b.gif",
                texto: [
                    "Cumplir con todos los Controles prenatales programados.",
                    "Realizar las pruebas básicas de búsqueda de infecciones que pueden alterar tu salud y la de tu bebé: pruebas de VIH y pruebas para SÍfilis",
                    "Conocer la clinica que atenderá tu parto.",
                    "Asistir a la cita de planificación familiar entre la semana 28 y la semana 37, y haber elegido el metodo de planiicacion posparto.",  
                    "Aplicarse las vacunas de las gestación, suministradas por el Ministerio de Salud: Td: Toxoide diftérico (difteria): Dependiendo del antecedente vacunal desde la infancia hasta el embarazo actual; Influenza; DPT acelular (difteria, tétanos y tosterina acelular).", 
                ]
            }
        ]        
    }
]