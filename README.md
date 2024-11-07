# Customer Scoops - Formulario Multi-paso 📝

## 🚀 Demo

Visita el formulario en vivo: [Customer Scoops Form](https://customer-scoops-form.vercel.app/)

## 📋 Descripción

Este proyecto consiste en un formulario multi-paso diseñado para Customer Scoops. Los usuarios reciben un enlace por correo electrónico que los dirige a este formulario, donde pueden completar la información requerida de manera intuitiva y estructurada. Una vez completado el formulario, el usuario es redirigido a la página de Customer Scoops.

## 🎨 Diseño

El diseño está basado en [este proyecto de Figma](https://www.figma.com/design/o0AehSphF6uoE3Xf8nXAlH/Customer-Scoops?node-id=64-250&t=DLfDYRZ7IRLsYzUZ-0). Se ha implementado de manera fiel al diseño original, asegurando una experiencia de usuario óptima tanto en dispositivos móviles como en escritorio.

## 📧 Sistema de Correo

### Backend
- Repositorio: [GitHub - Resend Backend](https://github.com/VirJuarez/resend)
- API desplegada: [https://resend-five.vercel.app/](https://resend-five.vercel.app/)
- Endpoint para envío: `https://resend-five.vercel.app/api/send-email`
- [Ejemplo de correo enviado](https://resend.com/shared?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsX2lkIjoiMjVjODkxYzYtODg0MS00YWYyLThmNWYtYjUwMWE5OWI4OTE2In0sImlhdCI6MTczMDk1MjI4OCwiZXhwIjoxNzMxMTI1MDg4fQ.rT_yVT9D3RU_gDrCNMwzJZ3Ni3BADZpq6lFG7ls3SnQ)

### Limitaciones actuales
Debido a las restricciones de Resend, actualmente solo se pueden enviar correos a distintos emails si se cuenta con un dominio verificado. Por el momento, el sistema está configurado para enviar correos a mi dirección de email, ya que se corresponde a la cuenta de Resend utilizada.

## 🛠️ Instalación y Configuración Local

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/VirJuarez/customer-scoops-form.git
   ```

2. **Instala las dependencias**
   ```bash
   cd customer-scoops-form
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Accede a la aplicación**
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador

## 💻 Tecnologías Utilizadas

- React
- TypeScript
- Styled Components
- Vercel
