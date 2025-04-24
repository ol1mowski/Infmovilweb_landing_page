# 🖥️ Computer Service Company Website

Welcome to the **Computer Service Company Website**, a dynamic and modern company profile built during my Erasmus internship in Fuerteventura. This project showcases my ability to create professional and high-performing websites using the latest web technologies like Next.js, TypeScript, and MongoDB.

![obraz](https://github.com/user-attachments/assets/f2cf6210-5518-4696-a281-b874025ba82d)


## ✨ Overview

This website serves as a digital business card for a computer service company. It was developed using **Next.js** with **Server-Side Rendering (SSR)** for enhanced performance and SEO. The site is styled with **SCSS** to ensure modular and maintainable code. **MongoDB** is used for managing service requests, and the project is fully written in **TypeScript** to ensure type safety across the codebase.

### Key Features:
- **💻 Service Overview**: A comprehensive description of the company's services, including computer repairs, diagnostics, and electronics servicing.
- **📞 Contact Form**: A user-friendly form for customers to request service appointments or ask questions.
- **📍 Location and Hours**: Clear details about the company's physical location and business hours.
- **🔄 State Management**: The **Context API** is used to efficiently manage global state, such as user inquiries and service requests.
- **📈 SEO Optimization**: Server-Side Rendering (SSR) helps boost search engine visibility and improve loading times.

## 🔧 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React-based framework with SSR)
- **Styling**: [SCSS](https://sass-lang.com/) (For modular and maintainable styles)
- **Database**: [MongoDB](https://www.mongodb.com/) (Used to manage service request submissions)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Ensures type safety and maintainable code)
- **State Management**: Context API (For efficient global state handling)

## 🚀 How to Run This Project Locally

1. **Clone this repository:**

   ```bash
   git clone https://github.com/yourusername/computer-service-website.git
   cd computer-service-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open in your browser:**

   Visit `http://localhost:3000` to view the site locally.

## 🎨 Design Inspiration

The design focuses on a professional, user-friendly interface, making it easy for clients to learn about the company's services and get in touch. The layout is responsive and clean, providing a smooth experience across devices.

## 📞 Contact Section

The **Contact Form** allows users to quickly request services or ask questions, with submitted forms being stored securely in a **MongoDB** database.

## 🌍 Live Demo

Check out the live version of the website [here](your-live-demo-url).

## 🤝 Contributing

Feel free to fork this repository and submit pull requests. If you encounter any issues, please open an issue in this repository.

## 📫 Contact

If you have any questions or feedback, connect with me on [LinkedIn](your-linkedin-url) or [Twitter](your-twitter-url).

## ⭐️ Show Your Support

If you like this project, please give it a ⭐️ on GitHub—it's greatly appreciated!

# Instrukcja uruchomienia aplikacji z Dockerem

## Wymagania

- Docker
- Docker Compose

## Uruchomienie aplikacji w kontenerze Docker

### 1. Konfiguracja zmiennych środowiskowych

Przed uruchomieniem aplikacji należy skonfigurować zmienne środowiskowe. W pliku `docker-compose.yml` należy zaktualizować następujące wartości:

```yaml
environment:
  - DB_URL=mongodb+srv://username:password@cluster0.mongodb.net/infmovilweb?retryWrites=true&w=majority
```

Zastąp `username`, `password` i `cluster0.mongodb.net` własnymi danymi dostępowymi do bazy MongoDB.

### 2. Budowanie i uruchomienie kontenerów

```bash
# Budowanie i uruchomienie kontenerów
docker-compose up -d

# Tylko budowanie obrazów
docker-compose build

# Sprawdzenie logów
docker-compose logs -f
```

### 3. Zatrzymanie kontenerów

```bash
docker-compose down
```

## Struktura kontenerów

- **web** - aplikacja Next.js
- **mongodb** - baza danych (tylko dla środowiska lokalnego)

## Porty

- Aplikacja web: http://localhost:3000
- MongoDB: localhost:27017

## Wolumeny

- **mongodb_data** - dane bazy MongoDB

## Rozwiązywanie problemów

Jeśli aplikacja nie uruchamia się poprawnie, sprawdź logi:

```bash
docker-compose logs -f web
```

W przypadku problemów z połączeniem do bazy danych, upewnij się, że:
1. URL MongoDB jest poprawny
2. Użytkownik ma odpowiednie uprawnienia
3. Nazwa bazy danych jest poprawna
