document.addEventListener('DOMContentLoaded', () => {
  // Активация навигации
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });

  // Обработка FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });

  // Плавная прокрутка для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Анимация появления карточек при прокрутке
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.8s forwards';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
});

const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let inputSequence = [];

document.addEventListener('keydown', (e) => {
  inputSequence.push(e.key);

  // Проверяем последние 10 нажатий
  if (inputSequence.length >= secretCode.length) {
    const lastKeys = inputSequence.slice(-secretCode.length);
    if (lastKeys.join(',') === secretCode.join(',')) {
      document.getElementById('secretMessage').style.display = 'block';
      inputSequence = []; // Очищаем после успеха
    }
  }

  // Ограничиваем длину буфера
  if (inputSequence.length > 20) {
    inputSequence.shift();
  }
});

function closeSecret() {
  document.getElementById('secretMessage').style.display = 'none';
}

setTimeout(() => {
  const surprise = document.createElement('div');
  surprise.className = 'random-surprise';
  surprise.innerHTML = '✨ Неожиданность!';
  
  surprise.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    color: white;
    padding: 20px 40px;
    border-radius: 30px;
    font-weight: bold;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    z-index: 9999;
    animation: fade-out 5s forwards;
  `;
  
  document.body.appendChild(surprise);
  
  setTimeout(() => surprise.remove(), 5000);
}, Math.random() * 60000 + 30000); // От 30 до 90 секунд

@keyframes fade-out {
  0% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
}

// Получаем элементы
const trigger = document.getElementById('easterTrigger');
const message = document.getElementById('easterMessage');

// Показываем сообщение при клике
trigger.addEventListener('click', () => {
  message.style.display = 'block';
});

// Закрываем сообщение
function closeEaster() {
  message.style.display = 'none';
}

// Дополнительно: случайное мерцание (раз в 30–60 секунд)
setInterval(() => {
  trigger.style.opacity = '0.2';
  setTimeout(() => {
    trigger.style.opacity = '0.4';
  }, 800);
}, Math.random() * 30000 + 30000);

<script>
function toggleFaq(element) {
  const faqItem = element.closest('.faq-item');
  const answer = faqItem.querySelector('.faq-answer');

  // Проверяем, открыт ли текущий элемент
  if (faqItem.classList.contains('open')) {
    faqItem.classList.remove('open');
    answer.style.maxHeight = '0';
  } else {
    faqItem.classList.add('open');
    // Для корректной анимации: сначала устанавливаем высоту
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

// Инициализация: закрыть все ответы при загрузке
document.addEventListener('DOMContentLoaded', () => {
  const answers = document.querySelectorAll('.faq-answer');
  answers.forEach(answer => {
    answer.style.maxHeight = '0';
  });
});
</script>

