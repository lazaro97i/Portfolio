
const projects = [
  {
    name: "Licencias DPVT",
    image: "./assets/images/homeExample.png",
    date: "09/2023 - Actualidad",
    technologies: ["JavaScript", "React", "Redux", "Node", "Express", "MongoDB", "JWT"],
    category: "Administracion",
    description: `Sistema de administración de licencias para empleados del Departamento de Vialidad de San Miguel de Tucumán. Básicamente, registra un histórico de licencias para luego poder imprimir o guardar su respectivo informe detallado, generado en formato PDF. Los usuarios cuentan con roles de Administrador o Usuario, dependiendo de ello van a poder gestionar diferentes funciones del sistema.<br> <b>ACCESO ADM:</b><br><u>User:</u> 1234<br> <u>Password:</u> user1234`,
    repositories: {
      back: "https://github.com/lazaro97i/LicenciasDPVT",
      front: "https://github.com/lazaro97i/LicenciasDPVT",
      mobile: null
    },
    deploy: 'https://licencias-dpvt.vercel.app/'
  },
  {
    name: "Ataraxia Cerveceria",
    image: "./assets/images/ataraxia.png",
    date: "01/2023 - 03/2023",
    technologies: ["JavaScript", "React", "Redux", "React Native", "Node", "Express", "MongoDB", "JWT"],
    category: "E-Comerce",
    description: "Proyecto de tienda digital para la cervecería artesanal Ataraxia. Consiste en un sistema de comercio electrónico donde se pueden apreciar los distintos productos y paquetes que ofrece la cervecería. Permite realizar compras directamente desde el sitio web y cuenta con un sistema de registro para guardar los datos de envío y pago. Actualmente, los pagos se realizan a través de Mercado Pago.",
    repositories: {
      back: "https://github.com/feldrok/ataraxia-back",
      front: "https://github.com/feldrok/ataraxia-front",
      mobile: "https://github.com/feldrok/ataraxia-mobile"
    },
    deploy: "https://ataraxia-front.onrender.com/"
  },
  {
    name: "ABM de series",
    image: "./assets/images/abm_series.png",
    date: "10/2023 - 10/2023",
    technologies: ["JavaScript", "Vite", "React", "Redux", "Node", "Express", "MySQL"],
    category: "ABM",
    description: "Plataforma de administración para series. Es una herramienta online que permite a los usuarios gestionar y organizar información detallada sobre una amplia gama de contenidos audiovisuales. Con esta aplicación, los usuarios pueden agregar, modificar, anular y eliminar datos de las series ingresadas, incluyendo información como títulos, géneros, sinopsis, fechas de lanzamiento, precios y valoraciones. Además, ofrece funciones de búsqueda avanzada y filtros para facilitar la navegación y el descubrimiento de nuevo contenido.",
    repositories: {
      back: "https://github.com/lazaro97i/adminSeries/tree/main/back",
      front: "https://github.com/lazaro97i/adminSeries/tree/main/front",
      mobile: null
    },
    deploy: "https://admin-series.vercel.app/"
  },
  {
    name: "Prestamos Personales",
    image: "./assets/images/prestamos.png",
    date: "06/2023 - Actualidad",
    technologies: ["JavaScript", "Vite", "React", "Redux", "Node", "Express", "MongoDB"],
    category: "Gestion de clientes",
    description: "Sistema de registro de préstamos por cliente, es una herramienta especializada que permite llevar un detallado seguimiento de los préstamos otorgados a cada cliente. Ofrece la capacidad de registrar información específica sobre cada préstamo, incluyendo montos, fechas, términos y pagos. Además, brinda la funcionalidad de editar el estado de cada préstamo, permitiendo actualizaciones en tiempo real sobre pagos, vencimientos y otras condiciones, asegurando así un control preciso y efectivo de la cartera de préstamos.",
    repositories: {
      back: "https://github.com/lazaro97i/prestamos",
      front: "https://github.com/lazaro97i/prestamos",
      mobile: null
    },
    deploy: "https://prestamos.onrender.com/"
  },
  {
    name: "Minga",
    image: "./assets/images/gitProject.png",
    date: "12/2022 - 02/2023",
    technologies: ["JavaScript", "React", "Redux", "React Native", "Node", "Express", "MongoDB", "JWT"],
    category: "Lectura de mangas",
    description: "Plataforma web donde podrán disfrutar de una amplia selección de mangas de diversos géneros. Ofrecemos una extensa biblioteca que abarca desde mangas clásicos hasta las últimas novedades, permitiendo a los usuarios sumergirse en historias cautivadoras de acción, aventura, romance, ciencia ficción y mucho más. Con una interfaz amigable y accesible, los usuarios podrán navegar, leer y disfrutar de sus mangas favoritos desde cualquier dispositivo, en cualquier momento y lugar. <br><br><b>*EN DESARROLLO</b>",
    repositories: {
      back: "https://github.com/rodrigohernans/minga-backend",
      front: "https://github.com/feldrok/minga-frontend",
      mobile: "https://github.com/feldrok/mobile-minga-red"
    },
    deploy: null
  },
]

export default projects