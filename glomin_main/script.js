                
                const form = document.getElementById("contactForm");

                form.addEventListener("submit", function (event) {
                    event.preventDefault();

                    const name = document.getElementById("name").value.trim();
                    const email = document.getElementById("email").value.trim();
                    const message = document.getElementById("message").value.trim();

                    // Replace this with your own WhatsApp number.
                    // Use country code and digits only, without + or spaces.
                    const myWhatsAppNumber = "918317394594";

                    const text =
                        "New message from glomin_web_developers\n\n" +
                        "Name: " + name + "\n" +
                        "Email: " + email + "\n" +
                        "Message: " + message;

                    const whatsappURL =
                        "https://wa.me/" +
                        myWhatsAppNumber +
                        "?text=" +
                        encodeURIComponent(text);

                    window.open(whatsappURL, "_blank");
                    
                });