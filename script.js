* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body {
  background: #0f2027;
  color: #fff;
}

.hero {
  height: 100vh;
  background: linear-gradient(to right, #141e30, #243b55);
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 20px 10%;
}

.logo {
  font-size: 28px;
}
.logo span {
  color: #00c6ff;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
}

.hero-content {
  text-align: center;
  margin-top: 150px;
}

.hero-content h1 span {
  color: #00c6ff;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 30px;
  background: #00c6ff;
  color: #000;
  border-radius: 30px;
  text-decoration: none;
}

.section {
  padding: 80px 10%;
}

.section h2 {
  margin-bottom: 20px;
  font-size: 32px;
  border-bottom: 2px solid #00c6ff;
  display: inline-block;
}

.skill {
  margin-bottom: 20px;
}

.bar {
  background: #333;
  border-radius: 20px;
  overflow: hidden;
}

.bar div {
  height: 10px;
  background: #00c6ff;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  gap: 20px;
}

.card {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

footer {
  text-align: center;
  padding: 20px;
  background: #000;
}
