import './style.css'

const app = document.querySelector('#app')
app.innerHTML = `
<main class="login-page">
  <section class="login-card" aria-label="Login form">
    <div class="avatar" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
    <div class="card-content">
      <h1>Welcome back</h1>
      <p class="subtitle">Sign in to your account</p>
      <form id="loginForm" class="login-form" novalidate>
        <label class="field">
          <span>Username</span>
          <input type="text" id="username" name="username" value="admin" autocomplete="username" />
        </label>
        <label class="field">
          <span>Password</span>
          <div class="input-group">
            <input type="password" id="password" name="password" value="password" autocomplete="current-password" />
            <button type="button" id="togglePassword" class="toggle-password" aria-label="Show password">👁</button>
          </div>
        </label>
        <p id="message" class="message" aria-live="polite"></p>
        <button type="submit" class="primary-button" id="loginBtn">Sign in</button>
      </form>
      <p class="footer-text">Don't have an account? <a href="#">Sign up</a></p>
      <p class="demo-hint">Demo: username <strong>admin</strong> / password <strong>password</strong></p>
    </div>
  </section>
</main>
`

const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const message = document.getElementById('message')
const loginBtn = document.getElementById('loginBtn')
const togglePassword = document.getElementById('togglePassword')
const loginForm = document.getElementById('loginForm')

const resetState = () => {
  message.textContent = ''
  message.classList.remove('error', 'success')
  loginBtn.textContent = 'Sign in'
  loginBtn.classList.remove('success')
}

togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password'
  passwordInput.type = isPassword ? 'text' : 'password'
  togglePassword.textContent = isPassword ? '🙈' : '👁'
  togglePassword.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password')
})

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const username = usernameInput.value.trim()
  const password = passwordInput.value

  if (username === 'admin' && password === 'password') {
    message.textContent = 'Signed in successfully.'
    message.classList.remove('error')
    message.classList.add('success')
    loginBtn.textContent = '✓ Signed in'
    loginBtn.classList.add('success')
  } else {
    message.textContent = 'Invalid username or password.'
    message.classList.remove('success')
    message.classList.add('error')
    loginBtn.textContent = 'Sign in'
    loginBtn.classList.remove('success')
  }
})

usernameInput.addEventListener('input', resetState)
passwordInput.addEventListener('input', resetState)

