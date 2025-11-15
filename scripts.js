
document.addEventListener('DOMContentLoaded', function(){
  // hamburger menu
  var hamb = document.querySelectorAll('.hamburger');
  hamb.forEach(function(btn){
    btn.addEventListener('click', function(){
      var nav = btn.parentElement.querySelector('.nav-list');
      if(nav) nav.classList.toggle('show');
    });
  });

  // form handling (visual validation + toast)
  function setupForm(selector, feedbackId){
    var form = document.querySelector(selector);
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var valid = form.checkValidity();
      var feedback = document.getElementById(feedbackId);
      if(!valid){
        form.reportValidity();
        if(feedback) feedback.innerHTML = '<div class="alert" style="border-left:4px solid var(--c-danger)">Por favor corrija os campos em destaque.</div>';
        return;
      }
      // show success toast
      showToast('Mensagem enviada com sucesso.');
      form.reset();
      if(feedback) feedback.innerHTML = '<div class="alert" style="border-left:4px solid var(--c-accent)">Obrigado! Mensagem recebida (simulação).</div>';
    });
  }
  setupForm('#contactForm','formFeedback');
  setupForm('#contactForm2','formFeedback2');

  // toast util
  var toastTimeout;
  function showToast(text){
    var t = document.querySelector('.toast');
    if(!t){
      t = document.createElement('div');
      t.className='toast';
      document.body.appendChild(t);
    }
    t.textContent = text;
    t.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function(){ t.classList.remove('show'); }, 3500);
  }

  // modal demo (not shown by default) - accessible pattern left available for extension
  window.showModalDemo = function(){
    var backdrop = document.querySelector('.modal-backdrop');
    if(!backdrop){
      backdrop = document.createElement('div');
      backdrop.className='modal-backdrop';
      backdrop.innerHTML = '<div class="modal" role="dialog" aria-modal="true"><h3>Modal de exemplo</h3><p>Conteúdo do modal.</p><button onclick="this.closest(\'.modal-backdrop\').style.display=\'none\'">Fechar</button></div>';
      document.body.appendChild(backdrop);
    }
    backdrop.style.display='flex';
  };
});
