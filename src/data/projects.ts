interface Project {
    title : string
    type: string
    desc: string
    from: string
    to: string|null
    techs: string[]
    link: string|null
}
type Projects = {
    [key in 'es' | 'en']: Project[]
}

const projects : Projects = {
    'es' : [
        {
            title: 'Web personal <bnarvaez.dev>',
            type: 'Open Source',
            from: 'JUN 2022',
            to: null,
            desc: 'Es la web que estás viendo ahora, está escrita en Vue 3 con Typescript y Sass, Vuex para el estado del lenguaje, empaquetada con Vite y los test unitarios realizados con Vitest.',
            techs: ['vue','ts','js','sass','vite','vitest','figma'],
            link: 'https://github.com/prinick96/bnarvaez.dev'
        },
        {
            title: 'Arquitectura Hexagonal escrita en Go',
            type: 'Open Source',
            from: 'JUN 2022',
            to: null,
            desc: 'Un sistema ToDo con Arquitectura Hexagonal escrito en Go, ejemplos de casos de uso y cómo testearlos, listo para desplegar con Docker y Heroku.<br /><br />Puedes utilizarlo como template para tus propios proyectos.',
            techs: ['docker','heroku','go'],
            link: 'https://github.com/prinick96/hex-arch-go'
        },
        {
            title: 'Didoc para Centros Médicos y Doctores',
            type: 'Cliente',
            from: 'MAR 2021',
            to: null,
            desc: 'Una plataforma para agendamiento de citas online, teleconsultas, gestión de pacientes, administración de roles, cobros, receta electrónica verificada,  etc.<br /><br /> El backend son varios microservicios que están montados con la arquitectura Backend For Frontend escritos en Go, Python y Node, cada microservicio está realizado utilizando arquitectura hexagonal, conexión con CockroachDB, MongoDB y RabbitMQ.<br /><br /> Hay varios frontend que consumen los microservicios, casi todos incluyendo el principal están escritos en VueJs y la teleconsulta utiliza ReactJs.',
            techs: ['go','python','next','cockroach','mongodb','rabbit','vue','sass','ts','vite'],
            link: null,
        },
        {
            title: 'Bilance wallet de BTC y USDT en Go',
            type: 'Cliente',
            from: 'JUL 2021',
            to: 'FEB 2022',
            desc: 'Una plataforma que funcionaba como monedero para BTC y USDT y micro exchange, para poder hacer intercambios entre las dos monedas, la plataforma se quedaba siempre con un porcentaje de ganancia entre cada intercambio y los usuarios tenían un gran sistema de referidos que bonificaba con acciones de los referidos dentro de la plataforma.<br /><br /> El Frontend escrito en Vue 2<br /> El Backend escrito en GO, con una estructura de Model-Controller.',
            techs: ['go','node', 'cpp','vue','sass','html5','js','ts'],
            link: null,
        },
        {
            title: '7Trading',
            type: 'Cliente',
            from: 'MAY 2021',
            to: 'JUN 2021',
            desc: 'Plataforma de envío de señales de inversión de criptomonedas, escrito el backend en Go y el front en Vue.<br /><br />Los creadores de las señales hacían una gráfica en TradingView con la estimación de subida/caída del precio y desde un backoffice creaban la señal, la cual era notificada por Telegram con un bot, los usuarios abrían la señal y veían la gráfica de predicción para proceder a realizar la inversión.',
            techs: ['go','node','vue','sass','html5'],
            link: null,
        },
        {
            title: 'THD Criptomoneda y plataforma descentralizada',
            type: 'Cliente',
            from: 'NOV 2018',
            to: 'JUL 2019',
            desc: 'Un proyecto de moneda que empezó como un FORK de Dash para levantar una criptomoneda llamada THD que se centrara en una plataforma descentralizada y su valor creciera en función de la usabilidad de la plataforma.<br /><br />Al ser un fork de dash, la criptomoneda se podía minar y desplegar masternodos, que básicamente son super nodos que reservan cantidades X de la criptomoneda para funcionar.<br /><br />La plataforma en cuestión, tiene desarrollada toda la funcionalidad de interacción con la criptomoneda, hice un servicio en Node.js que se comunicaba con el nodo gensis y gestionaba los monederos y su contenido, esto se representaba de forma gráfica en el dashboard de los clientes, escrito en Vue.<br /><br /> Además, se podía desplegar masternodos automatizados, los cuales se cobraban a los clientes con Bitcoin o con la criptomoneda THD.<br /><br />Estos masternodos eran Droplets de Digital Ocean que replicaban el nodo principal y funcionaban como un masternodo de la wallet del cliente, por lo que tuve que interactuar con la api de Digital Ocean e instalar en el despliegue, un script en Go que realizaba la réplica del nodo y dejaba configurado el masternodo.<br /><br />Es uno de los proyectos más interesantes que he tenido oportunidad de hacer, desafortunadamente el proyecto no está en pie, sin embargo conservo todo el código en mis repositorios privados para mostrar el funcionamiento.',
            techs: ['go','php','node','dash','cpp','linux','vue','js','sass','html5'],
            link: null,
        },
        {
            title: 'NEM Crypto api para wallet',
            type: 'Cliente',
            from: 'NOV 2018',
            to: 'DIC 2018',
            desc: 'API para interactuar con un nodo de la criptomoneda NEM, escrito en Java',
            techs: ['java','nem'],
            link: null,
        },
        {
            title: 'Ocrend PHP Framework',
            type: 'Open Source',
            from: 'MAR 2017',
            to: 'OCT 2018',
            desc: 'Ocrend era el nombre de una pequeña academia que quise hacer en YouTube, y me enfoqué en crear un pequeño Framework de PHP enfocado en MVC, la idea era aprender a programar un sistema web utilizando la arquitectura MVC y aprender en el proceso.',
            techs: ['php','mysql','postgre'],
            link: 'https://github.com/prinick96/Ocrend-Framework',
        },
        {
            title: 'Bitmarket carrito de compras tipo video juego en JS y PHP',
            type: 'Cliente',
            from: 'FEB 2018',
            to: 'APR 2018',
            desc: 'Un proyecto bastante divertido que consistía en tener un carrito de compras e irlo moviendo por un pasillo y tomar los productos a comprar de los anaqueles, el proyecto no se terminó pero aún conservo el repositorio para mostrarlo funcionando.<br /><br />El carrito y los demás componentes eran snippets en .svg que controlaba con animaciones css. Además tenía música.<br /><br />La forma de pago al finalizar la selección de productos era con un Token ERC20 realizado para el cliente y también Bitcoin.',
            techs: ['php','css3','html5', 'js', 'node'],
            link: null,
        },
        {
            title: 'Ecommerce como servicio',
            type: 'Cliente',
            from: 'FEB 2017',
            to: 'ENE 2018',
            desc: 'Fue el primer proyecto en el que trabajé el backend como servicio y dejé de hacer un monolito entre frontend y backend.<br /><br />El front lo trabajé con Coffescript, sin uso de librerías externas.<br /><br />El backend fue hecho en PHP con Silex de Symfony para la API.<br /><br />El diseño de las interfaces lo hice yo mismo con Adobe Photoshop.<br /><br />Un ecommerce pequeño con las necesidades concretas del cliente.',
            techs: ['php','symfony', 'js', 'html5', 'css3'],
            link: null,
        },
        {
            title: 'Sistema de votos Paraguay',
            type: 'Cliente',
            from: 'NOV 2017',
            to: null,
            desc: 'Escrito con un framework PHP propio, hice un sistema sencillo para hacer votaciones de candidatos en una interfaz de una página.<br /><br />Los candidatos se cargaban manualmente y luego aparecían en la página principal para hacer las votaciones.<br /><br />Las votaciones tenían un horario de apertura y cierre según la hora local de Paraguay.<br /><br />Frontend hecho con Javascript y jQuery para consumir la api del backend.',
            techs: ['php', 'mysql', 'js', 'html5', 'css3'],
            link: null,
        },
        {
            title: 'Software de control para técnicos de teléfonos',
            type: 'Cliente',
            from: 'SEP 2017',
            to: 'OCT 2017',
            desc: 'Dashboard escrito en PHP que permitía un control en el flujo de trabajo e inventario de una pequeña empresa de técnicos de teléfonos celulares.',
            techs: ['php', 'mysql', 'js', 'html5', 'css3'],
            link: null,
        },
        {
            title: 'Página personal con API de Youtube',
            type: 'Open Source',
            from: 'OCT 2017',
            to:  null,
            desc: 'El proyecto lo escribí en un framework propio de PHP. Se conecta con la API de YouTube y mostraba mis videos más recientes subidos.<br /><br />Era un sitio web personal para acompañar a mi canal de YouTube.',
            techs: ['php', 'js', 'html5', 'css3'],
            link: 'https://github.com/prinick96/prinick.com/',
        },
        {
            title: 'Calculadora de BTC a CLP/BS/USD',
            type: 'Cliente',
            from: 'OCT 2017',
            to:  null,
            desc: 'Una pequeña app frontend que consumía de varias APIS, entre ellas de coinmarketcap para hacer un cálculo del precio de Bitcoin del momento a la moneda local seleccionada.',
            techs: ['js', 'html5', 'css3'],
            link: null,
        },
        {
            title: 'Tracking para mecánica de vehículos',
            type: 'Cliente',
            from: 'MAR 2017',
            to:  'JUN 2017',
            desc: 'Un sistema web escrito en PHP con Codeigniter, para gestionar todo acerca de remolques, utilitarios de vehículos o cabezas tractoras. Todos estos tenían una serie de campos para describir servicios a realizar, cada vehículo tenía un historial de asignaciones de conductores. Cada conductor debía poder manejar máximo una tractora o utilitaria y un remolque. Cada vehículo tenía una cantidad de ejes en los cuales se les asigna una cantidad definida de neumáticos, eran sustituidos o reemplazados tanto en la ubicación del vehículo o movidos a otro vehículo, por tanto había un historial de esas modificaciones. En el dashboard se notificaba cuando algún vehículo ya necesitaba otra revisión, la cual era programada en base al Km de cada uno. Cada conductor tenía su propio usuario para gestionar todo lo relacionado con él.',
            techs: ['php', 'mysql', 'js', 'html5', 'css3'],
            link: null,
        },
        {
            title: 'Simulador de particionamiento en ASSEMBLY',
            type: 'Open Source',
            from: 'JUN 2017',
            to:  null,
            desc: 'Proyecto de investigación que simula el movimiento de bloques y particionamiento en memoria caché utilizando el algoritmo de reemplazo FIFO. Realizado en ASM para Win32 con una interfaz de comandos.<br /><br />Escrito en una noche.',
            techs: ['asm','csharp'],
            link: 'https://github.com/prinick96/cache-asm/blob/master/main.asm',
        },
        {
            title: 'Procesos e Hilos de Linux',
            type: 'Open Source',
            from: 'MAY 2017',
            to:  null,
            desc: 'Proyecto de investigación para familiarizarse con los llamados al sistema relativos a la creación y administración de procesos e hilos usando la librería POSIX para la creación de procesos e hilos en Linux usando C con interfaz de comandos.',
            techs: ['cpp','linux'],
            link: 'https://github.com/prinick96/procesos_e_hilos_SO',
        },
        {
            title: 'Directorio para Inmobiliaria',
            type: 'Cliente',
            from: 'OCT 2016',
            to:  'FEB 2017',
            desc: 'Proyecto para una inmobiliaria en México escrito en PHP con Laravel, HTML, CSS y JS.<br /><br />Era un directorio web donde la inmobiliaria podía colocar a través de un backoffice todas sus propiedades en arriendo y venta.<br /><br />Las publicaciones tenían fotos y un visor 3D en algunas ocasiones, con un formulario de contacto para poder agendar citas.<br /><br />El backoffice tenía varios usuarios administradores con roles definidos, entre ellos, los agentes de inmueble que gestionaban las propiedades asignadas.<br /><br />Trabajé con un diseñador gráfico para realizar las interfaces del directorio.',
            techs: ['php', 'laravel', 'mysql', 'js', 'html5', 'css3'],
            link: null,
        },
        {
            title: 'Web de videos',
            type: 'Cliente',
            from: 'AUG 2016',
            to:  'DIC 2016',
            desc: 'Proyecto desarrollado para un cliente en puerto rico que deseaba tener un sitio web para mostrar videos.<br /><br />El proyecto está escrito en PHP y hago uso de la librería FFMpeg para PHP, la cual se instalaba como una librería en linux para poder manejar medios, la utilicé para extraer thumbs de los videos y éstos se previsualizaran al pasar el mouse por encima.<br /><br />Antes del proyecto, el cliente tenía un wordpress con casi 10TB de videos, por lo que también tuve que programar una herramienta que migrara toda esa información a la nueva base de datos, incluyendo mover los archivos de un servidor a otro.<br /><br />El sitio debía ser multilenguaje, tener un sistema de usuarios, clasificación de videos, comentarios, descargas permitidas para usuarios premium, pasarela de pago en paypal para la suscripción premium.',
            techs: ['php', 'mysql', 'js', 'html5', 'css3', 'linux'],
            link: null,
        },
        {
            title: 'Simulador de Caché a bajo nivel',
            type: 'Open Source',
            from: 'NOV 2016',
            to:  'DIC 2016',
            desc: 'Proyecto de investigación para simular el comportamiento de una jerarquía de memoria que consiste en una memoria caché y una memoria principal.<br /><br />Mapeo directo hacia un número.<br /><br />Mapeo asociativo por conjunto hacia un número.<br /><br />Movimiento de bloques en la memoria caché.<br /><br />Algoritmos de reemplazo en caché (LRU, FIFO, RAND).',
            techs: ['c'],
            link: 'https://github.com/prinick96/cache-simulator',
        },
        {
            title: 'Inscripción de materias del semestre, para alumnos',
            type: 'Open Source',
            from: 'JUN 2016',
            to:  'JUL 2016',
            desc: 'Proyecto de investigación para la univesidad escrito en C++ usando memoria dinámica, con interfaz de comandos. La información se guardaba en archivos .txt para posteriormente recuperarlas al volver a iniciar el programa.<br /><br />Consiste en un pensum completo con las respectivas materias de cada semestre, cada materia con su disponibilidad de profesor y horas.<br /><br />El programa debía ingresar con éxito todos los alumnos en las materias seleccionadas, si una materia se quedaba sin cupo, debía reubicar al alumno que la necesitaba en otro horario/sección disponible teniendo en cuenta las materias ya inscritas en su propio horario.',
            techs: ['cpp'],
            link: 'https://github.com/prinick96/program_ii',
        },
        {
            title: 'Multinivel con Paypal Marketplace',
            type: 'Open Source',
            from: 'ABR 2015',
            to:  'FEB 2016',
            desc: 'Fue mi primer proyecto de larga duración, consistía en una red binaria multinivel donde se realizaban cobros vía Paypal, cada usuario tenía una cuenta de Paypal asociada donde recibiría el dinero, cuando un usuario hijo hacía un pago, se distribuía el dinero en forma de comisiones entre todos los relacionados arriba del mismo y se depositaba automáticamente el dinero.',
            techs: ['php','mysql','js','css3','html5'],
            link: 'https://github.com/prinick96/program_ii',
        },
        {
            title: 'Xnova Revolution',
            type: 'Open Source',
            from: 'FEB 2010',
            to:  'MAR 2011',
            desc: 'Básicamente era 2010, tenía al rededor de 14 años y jugaba OGame, un juego de estrategia militar en el espacio, entonces pensé en crear mi propio servidor de OGame.<br /><br />¿Qué tenía que hacer? Sólo sabía HTML, CSS y JS, entonces aprendí PHP y desarrollé mi propio clon de OGame.<br /><br />El proyecto empezó open source y tuvo colaboración de muchas más personas, en ese momento ni sabía lo que era git, por lo que siempre usaba SVN para el control de versiones del proyecto y el código entero está en SourceForge.<br /><br />Si lo descargas, verás mi nombre en los créditos del core del proyecto y también en cualquier servidor del juego que esté funcionando actualmente (aunque le retiren los créditos), como por ejemplo http://www.xnovarevolution.net en el changelog.<br /><br />Todo el diseño de la interfaz lo hice yo con Photoshop, hice la maquetación y la programación del core.',
            techs: ['php', 'mysql', 'html5', 'css3', 'js', 'photoshop'],
            link: 'https://sourceforge.net/projects/xnovarevolution/',
        },
    ],
    'en' : [
        {
            title: 'Personal web <bnarvaez.dev>',
            type: 'Open Source',
            from: 'JUN 2022',
            to: null,
            desc: 'It is the web you are seeing now, it is written in Vue 3 with Typescript and Sass, Vuex for the state of the language, packaged with Vite and the unit tests carried out with Vitest.',
            techs: ['vue','ts','js','sass','vite','vitest','figma'],
            link: 'https://github.com/prinick96/bnarvaez.dev'
        },
        {
            title: 'Hexagonal Architecture written in Go',
            type: 'Open Source',
            from: 'JUN 2022',
            to: null,
            desc: 'A ToDo system with Hexagonal architecture written in Go, uses cases examples and how tested them, ready to deploy with Docker and Heroku<br /><br /> You can use it as a template for your own projects.',
            techs: ['docker','heroku','go'],
            link: 'https://github.com/prinick96/hex-arch-go'
        },
        {
            title: 'Didoc for Doctors and Medical Centers',
            type: 'Customer',
            from: 'MAR 2021',
            to: null,
            desc: 'A platform for online bookings appointments, videocall consultation, pacients management, roles administration, payments, verified electronic prescription.<br /><br /> The backend are multiples microservices that are charged with Backend For Fronted architecture in Go, Python and Node, each microservice is done using hexagonal architecture, conexion with CockroachDB, MongoDB and RabbitMQ.<br /><br />There are multiples frontend that consum the microservices, almost averyone including the main are written in Vuejs and the videocall uses ReactJs.',
            techs: ['go','python','next','cockroach','mongodb','rabbit','vue','sass','ts','vite'],
            link: null,
        },
        {
            title: 'Bilance billetera of BTC and USDT in Go',
            type: 'Customer',
            from: 'JUL 2021',
            to: 'FEB 2022',
            desc: 'A platform that works as a wallet for BTC and USDT and micro exchange, to be able to make exchanges between the two currencies, the platform always kept a percentage of profit between each exchange and the users had a great referral system that rewarded with actions of the referrals within the platform <br /><br />The Fronted written in Vue 2 The Backend written in Go, with a Model-Controller structure',
            techs: ['go','node', 'cpp','vue','sass','html5','js','ts'],
            link: null,
        },
        {
            title: '7Trading',
            type: 'Customer',
            from: 'MAY 2021',
            to: 'JUN 2021',
            desc: 'Cryptocurrency investment signal delivery platform, written the backend in Go and the front in Vue The creators of the signals made a graph in TradingView with the estimate of price rise/fall and from a backoffice they created the signal, which was notified by Telegram with a bot, the users opened the signal and saw the prediction graph to proceed to make the investment',
            techs: ['go','node','vue','sass','html5'],
            link: null,
        },
        {
            title: 'Cryptocurrency THD and decentralize platform',
            type: 'Customer',
            from: 'NOV 2018',
            to: 'JUL 2019',
            desc: `Customer A currency project that started as a FORK of Dash to build a cryptocurrency called THD that would focus on a decentralized platform and its value would grow based on the usability of the platform.
            <br /><br />Being a dash fork, the cryptocurrency could be mined and deploy masternodes, which are basically super nodes that reserve X amounts of the cryptocurrency to work.
            <br /><br />The aforementioned platform has developed all the functionality of interaction with the cryptocurrency, I made a service in Node.js which communicated with the gensis node and managed the wallets and their content, 
            this was represented graphically in the client\'s dashboard , written in Vue In addition, automated masternodes could be deployed, which were charged to clients with Bitcoin or with the THD cryptocurrency.
            <br /><br />These masternodes were Droplets from Digital Ocean that replicated the main node and worked as a masternode for the client\'s wallet, so I had to interact with the Digital Ocean api and install a Go script in the deployment 
            that replicated the node and left the masternode configured.
            <br /><br />It is one of the most interesting projects that I have had the opportunity to do, unfortunately the project is not up and running, however I keep all the code in my private repositories to show how it works.`,
            techs: ['go','php','node','dash','cpp','linux','vue','js','sass','html5'],
            link: null,
        },
        {
            title: 'NEM Crypto api for wallet',
            type: 'Customer',
            from: 'NOV 2018',
            to: 'DEC 2018',
            desc: 'API to interact with a NEM cryptocurrency node, written in Java',
            techs: ['java','nem'],
            link: null,
        },
        {
            title: 'Ocrend PHP Framework',
            type: 'Open Source',
            from: 'MAR 2017',
            to: 'OCT 2018',
            desc: 'Ocrend was the name of a small academy that wanted to do on Youtube, and I focused on creating a small PHP Framework focused on MVC, the idea was to learn to program a web system using a MVC architecture and learn in the procces.',
            techs: ['php','mysql','postgre'],
            link: 'https://github.com/prinick96/Ocrend-Framework',
        },
        {
            title: 'Bitmarket shopping cart like a video game in JS and PHP',
            type: 'Customer',
            from: 'FEB 2018',
            to: 'APR 2018',
            desc: `Customer A quite fun project that consisted of having a shopping cart and moving it down an aisle and taking the products to buy from the shelves, the project was not finished but I still have the repository to show it working 
            <br /><br />The cart and the other components were .svg snippets that I controlled with css animations. It also had music. The form of payment at the end of the product selection was with an ERC20 Token made for the client and also Bitcoin.`,
            techs: ['php','css3','html5', 'js', 'node'],
            link: null,
        },
        {
            title: 'Ecommerce as a service',
            type: 'Customer',
            from: 'FEB 2017',
            to: 'JAN 2018',
            desc: `Customer JAN 2018 It was the first project I worked the backend as a service and I stopped making a monolith between fronted and backend
            .<br /><br />I worked on the front with Coffescript, without using external libraries.
            <br /><br />The backend was made in PHP with Symfony's Silex for the API.
            <br /><br />I did the design of the interfaces myself with Adobe Photoshop A small ecommerce with the specific needs of the client`,
            techs: ['php','symfony', 'js', 'html5', 'css3'],
            link: null,
        },
        {
            title: 'Paraguay system votes',
            type: 'Customer',
            from: 'NOV 2017',
            to: null,
            desc: `Customer Written with a own PHP framework, I made a simple system for voting candidates in a one-page interface
            <br /><br />The candidates were uploaded manually and then appeared on the main page to vote The voting had an opening and closing schedule according to the local time in Paraguay.
            <br /><br />Frontend made with Javascript and jQuery to consume the backend api.`,
            techs: ['php', 'mysql', 'js', 'html5', 'css3'],
            link: null,
        },
        {
            title: 'Control software for telephone technicians',
            type: 'Customer',
            from: 'SEP 2017',
            to: 'OCT 2017',
            desc: 'Customer Dashboard written in PHP that allowed a control in the flow of work and inventory of a small company of cell phone technicians.',
            techs: ['php', 'mysql', 'js', 'html5', 'css3'],
            link: null,
        },
        {
            title: 'Personal page with Youtube API',
            type: 'Open Source',
            from: 'OCT 2017',
            to:  null,
            desc: 'I wrote the project in a self PHP framework. It connects with the YouTube API and shows my most recently uploaded videos <br /><br />It was a personal website to complement my Youtube channel.',
            techs: ['php', 'js', 'html5', 'css3'],
            link: 'https://github.com/prinick96/prinick.com/',
        },
        {
            title: 'BTC to CLP/BS/USD calculator',
            type: 'Customer',
            from: 'OCT 2017',
            to:  null,
            desc: 'Customer A small frontend app that consumed from multiples APIS, including coinmarketcap to calculate the current price of Bitcoin in the selected local currency.',
            techs: ['js', 'html5', 'css3'],
            link: null,
        },
        {
            title: 'Tracking for vehicle mechanics',
            type: 'Customer',
            from: 'MAR 2017',
            to:  'JUN 2017',
            desc: `A web system written in PHP with Codeigniter, to manage everything about trailers, utility vehicles or tractor heads. 
            <br /><br /> All of these had a series of fields to describe services to be performed, each vehicle had a history of driver assignments.
            <br /><br /> Each driver had to be able to drive a maximum of one tractor or utility vehicle and one trailer. Each vehicle had a number of axles on which a defined number of tires were assigned, replaced either at the vehicle's location or moved to another vehicle, so there was a history of those modifications.
            <br /><br /> The dashboard was notified when a vehicle already needed another review, which was scheduled based on the mileage of each one. Each driver had his own user to manage everything related to him.`,
            techs: ['php', 'mysql', 'js', 'html5', 'css3'],
            link: null,
        },
        {
            title: 'Partition simulator in ASSEMBLY',
            type: 'Open Source',
            from: 'JUN 2017',
            to:  null,
            desc: 'Research project that simulates block movement and cache partitioning using the FIFO replacement algorithm. Made in ASM for Win32 with a command line interface. <br /><br />Written in one night.',
            techs: ['asm','csharp'],
            link: 'https://github.com/prinick96/cache-asm/blob/master/main.asm',
        },
        {
            title: 'Linux Processes and Threads',
            type: 'Open Source',
            from: 'MAY 2017',
            to:  null,
            desc: 'Research project to become familiar with system calls related to creating and managing processes and threads using the POSIX library for creating processes and threads in Linux using C with a command interface.',
            techs: ['cpp','linux'],
            link: 'https://github.com/prinick96/procesos_e_hilos_SO',
        },
        {
            title: 'Real Estate Directory',
            type: 'Customer',
            from: 'OCT 2016',
            to:  'FEB 2017',
            desc: `Project for a real estate agency in Mexico written in PHP with Laravel, HTML, CSS and JS It was a web directory where the real estate agency could place all its properties for rent and sale through a backoffice
            <br /><br />The publications had photos and a 3D viewer on some occasions, with a contact form to be able to schedule appointments.
            <br /><br />The backoffice had several administrator users with defined roles, including real estate agents who managed the assigned properties I worked with a graphic designer to make the directory interfaces.`,
            techs: ['php', 'laravel', 'mysql', 'js', 'html5', 'css3'],
            link: null,
        },
        {
            title: 'Videos web',
            type: 'Customer',
            from: 'AUG 2016',
            to:  'DEC 2016',
            desc: `Project developed for a client in Puerto Rico who wanted to have a website to display videos The project is written in PHP and I make use of the FFMpeg library for PHP, which was installed as a library in linux to handle media
            <br /><br />I used it to extract thumbs from the videos and they will be previewed when hovering over them. 
            <br /><br />Before the project, the client had a wordpress with almost 10TB of videos, so I also had to program a tool that would migrate all that information to the new database, including moving the files from one server to another. 
            <br /><br />The site had to be multilanguage, have a user system, video classification, comments, downloads allowed for premium users, paypal payment gateway for premium subscription.`,
            techs: ['php', 'mysql', 'js', 'html5', 'css3', 'linux'],
            link: null,
        },
        {
            title: 'Low level cache simulator',
            type: 'Open Source',
            from: 'NOV 2016',
            to:  'DEC 2016',
            desc: `Research project to simulate the behavior of a memory hierarchy consisting of a cache memory and a main memory
            <br /><br />Direct mapping to a number.
            <br /><br />Set-associative mapping to a number.
            <br /><br />Movement of blocks in the cache.
            <br /><br />Cache replacement algorithms (LRU, FIFO, RAND).`,
            techs: ['c'],
            link: 'https://github.com/prinick96/cache-simulator',
        },
        {
            title: 'Registration of subjects of the semester',
            type: 'Open Source',
            from: 'JUN 2016',
            to:  'JUL 2016',
            desc: `Research project for the university written in C++ using dynamic memory, with a command interface. 
            <br /><br />The information was saved in .txt files to later retrieve them when the program was started again It consists of a complete curriculum with the respective subjects for each semester, each subject with its teacher availability and hours.
            <br /><br />The program had to successfully enter all the students in the selected subjects, if a subject ran out of space, it had to relocate the student who needed it in another available schedule/section taking into account the subjects already registered in their own schedule`,
            techs: ['cpp'],
            link: 'https://github.com/prinick96/program_ii',
        },
        {
            title: 'MLM with PayPal Marketplace',
            type: 'Open Source',
            from: 'ABR 2015',
            to:  'FEB 2016',
            desc: 'It was my first long-term project, it consisted of a multilevel binary network where payments were made via Paypal, each user had an associated Paypal account where they would receive the money, when a child user made a payment, the money was distributed in the form of commissions among all those listed above it and the money was automatically deposited.',
            techs: ['php','mysql','js','css3','html5'],
            link: 'https://github.com/prinick96/program_ii',
        },
        {
            title: 'Xnova Revolution',
            type: 'Open Source',
            from: 'FEB 2010',
            to:  'MAR 2011',
            desc: `Basically it was 2010, I was around 14 years old and I was playing OGame, a military strategy game in space, so I thought about creating my own OGame server
            <br /><br />What did I have to do? I only knew HTML, CSS and JS, so I learned PHP and I developed my own OGame clone.
            <br /><br />The project started open source and had the collaboration of many more people, at that time I didn't even know what git was, so I always used SVN for version control of the project and the entire code is on SourceForge.
            <br /><br />If you download it, you will see my name in the credits of the core of the project and also in any game server that is currently running (even if the credits are removed), such as http://www.xnovarevolution.net in the changelog I made all the interface design with Photoshop, I did the layout and core programming`,
            techs: ['php', 'mysql', 'html5', 'css3', 'js', 'photoshop'],
            link: 'https://sourceforge.net/projects/xnovarevolution/',
        },
    ],
}

export default projects