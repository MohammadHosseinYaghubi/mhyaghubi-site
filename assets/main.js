/**
 * MOHAMMAD HOSSEIN YAGHUBI - MAIN SCRIPT
 * Vanilla JavaScript (No build step, no npm, runs directly on GitHub Pages)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Language
  if (window.i18n) {
    const currentLang = window.i18n.getCurrentLang();
    window.i18n.applyLanguage(currentLang);
  }

  // 2. Language Switcher Buttons
  const langButtons = document.querySelectorAll('.lang-toggle-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.i18n) {
        window.i18n.toggleLanguage();
      }
    });
  });

  // 3. Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  if (mobileMenuBtn && mobileDrawer) {
    const closeDrawer = () => {
      mobileDrawer.classList.remove('open');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.className = 'fa-solid fa-bars';
      }
    };

    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDrawer.classList.toggle('open');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (mobileDrawer.classList.contains('open')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });

    // Close when clicking any nav-link inside drawer
    const drawerLinks = mobileDrawer.querySelectorAll('a, button');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('open') && !mobileDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeDrawer();
      }
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  // 4. Toast Notification System
  function showToast(message) {
    let toast = document.querySelector('.toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#10B981"></i> <span>${message}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
  window.showToast = showToast;

  // 5. Email Copy Functionality
  const copyEmailBtns = document.querySelectorAll('.btn-copy-email, .email-copy-pill');
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'm.h.yaghubi.info@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          const currentLang = window.i18n ? window.i18n.getCurrentLang() : 'en';
          const msg = currentLang === 'fa' 
            ? 'آدرس ایمیل با موفقیت کپی شد: ' + email 
            : 'Email copied to clipboard: ' + email;
          showToast(msg);
        });
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Email copied: ' + email);
      }
    });
  });

  // 6. Interactive Terminal
  const runBtn = document.querySelector('.terminal-run-btn');
  const copyCodeBtn = document.querySelector('.terminal-copy-btn');
  const terminalFooter = document.querySelector('.terminal-footer');
  const codeBody = document.querySelector('.terminal-code-body');

  if (copyCodeBtn && codeBody) {
    copyCodeBtn.addEventListener('click', () => {
      const codeText = codeBody.innerText;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(codeText).then(() => {
          showToast('Python code copied to clipboard!');
        });
      }
    });
  }

  if (runBtn && terminalFooter) {
    runBtn.addEventListener('click', () => {
      const isFa = window.i18n && window.i18n.getCurrentLang() === 'fa';
      const cmdText = terminalFooter.querySelector('.terminal-cmd');
      const statusText = terminalFooter.querySelector('.terminal-status-ok');
      
      if (cmdText && statusText) {
        cmdText.innerHTML = `<span class="caret">></span> <span style="color:#FBBF24;">Checking system deploy settings...</span>`;
        statusText.innerHTML = `<i class="fa-solid fa-spinner fa-spin" style="color:#38BDF8"></i> <span>CHECKING...</span>`;
        
        setTimeout(() => {
          cmdText.innerHTML = `<span class="caret">></span> python manage.py check --deploy`;
          statusText.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${isFa ? 'بدون خطا: ۰ مشکل' : 'OK: 0 ISSUES'}</span>`;
          showToast(isFa ? 'بررسی امنیت و استقرار جنگو با موفقیت تأیید شد!' : 'System check identified 0 issues. Ready for deploy!');
        }, 1100);
      }
    });
  }

  // 7. Telegram Order Generation
  // Formats and launches direct order to Telegram
  function launchTelegramOrder(details = {}) {
    const isFa = window.i18n && window.i18n.getCurrentLang() === 'fa';
    const tgUsername = 'mhycoding'; // Official Telegram handle
    
    let text = "";
    if (isFa) {
      text = `سلام آقای یعقوبی،\nدرخواست سفارش و همکاری از طریق وب‌سایت:\n\n` +
             `📌 سرویس مورد نظر: ${details.service || 'معماری بک‌اند جنگو'}\n` +
             `⏱ فوریت زمانی: ${details.urgency || 'استاندارد'}\n` +
             `👤 نام مشتری: ${details.name || 'کارفرمای محترم'}\n` +
             `✉️ ایمیل: ${details.email || 'ارسال نشده'}\n` +
             `📝 شرح نیازمندی: ${details.message || 'درخواست مشاوره و بررسی فنی'}\n\n` +
             `#سفارش_وبسایت #Django #Architecture`;
    } else {
      text = `Hello Mohammad Hossein,\nProject inquiry via portfolio website:\n\n` +
             `📌 Service: ${details.service || 'Scalable Django Architecture'}\n` +
             `⏱ Timeline: ${details.urgency || 'Standard sprint'}\n` +
             `👤 Client Name: ${details.name || 'Prospective Client'}\n` +
             `✉️ Email: ${details.email || 'Not provided'}\n` +
             `📝 Requirements: ${details.message || 'Architecture consultation & project kickoff'}\n\n` +
             `#WebOrder #Django #Backend`;
    }

    const encodedText = encodeURIComponent(text);
    const tgUrl = `https://t.me/${tgUsername}?text=${encodedText}`;
    window.open(tgUrl, '_blank');
  }
  window.launchTelegramOrder = launchTelegramOrder;

  // Handle Telegram Order Buttons across pages
  const tgButtons = document.querySelectorAll('.btn-launch-telegram');
  tgButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || 'Custom Django Solution';
      launchTelegramOrder({ service });
    });
  });

  // 8. Contact Form Handling
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]')?.value || '';
      const email = contactForm.querySelector('[name="email"]')?.value || '';
      const scope = contactForm.querySelector('[name="scope"]')?.value || '';
      const message = contactForm.querySelector('[name="message"]')?.value || '';

      if (!name || !email || !message) {
        showToast(window.i18n && window.i18n.getCurrentLang() === 'fa' ? 'لطفاً فیلدهای ضروری را پر کنید.' : 'Please fill in all required fields.');
        return;
      }

      // Open choice: Send via Telegram or Email
      const isFa = window.i18n && window.i18n.getCurrentLang() === 'fa';
      
      // Auto launch Telegram or Mailto
      const confirmTg = confirm(isFa 
        ? 'آیا مایلید این سفارش مستقیماً در پیام‌رسان تلگرام نیز با فرمت آماده باز شود؟' 
        : 'Would you like to also open this request formatted directly in Telegram for immediate response?');
      
      if (confirmTg) {
        launchTelegramOrder({
          service: scope,
          name: name,
          email: email,
          message: message,
          urgency: 'Normal'
        });
      } else {
        const mailtoUrl = `mailto:m.h.yaghubi.info@gmail.com?subject=${encodeURIComponent(scope || 'Project Inquiry')}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        window.location.href = mailtoUrl;
      }

      showToast(isFa ? 'پیام شما آماده ارسال شد!' : 'Message processed! Thank you.');
      contactForm.reset();
    });
  }

  // 9. Interactive Product Filters (products.html)
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const productCards = document.querySelectorAll('.product-filter-item');

  if (filterBtns.length > 0 && productCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');
        productCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat.includes(category)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 10. System Architecture Modal (products.html & index.html)
  const modal = document.querySelector('#specsModal');
  const modalClose = document.querySelector('.modal-close-btn');
  const modalTitle = document.querySelector('#modalTitle');
  const modalBody = document.querySelector('#modalBody');
  const openModalBtns = document.querySelectorAll('.btn-open-specs');

  if (modal && modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });

    openModalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = btn.getAttribute('data-title') || 'System Architecture';
        const specs = btn.getAttribute('data-specs') || 'Clean architecture specifications and data pipeline breakdown.';
        if (modalTitle) modalTitle.innerText = title;
        if (modalBody) modalBody.innerHTML = specs;
        modal.classList.add('open');
      });
    });
  }
});
