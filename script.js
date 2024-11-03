


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        console.log('Form submitted:', data);
        alert('Thank you for contacting us! We will get back to you soon.');

        contactForm.reset();
    });

    const doctors = [
        {
            name: 'Dr. Ahmed Ali',
            specialty: 'Pediatrics',
            image: './images/doctor-2.jpg'
        },
        {
            name: 'Dr. Sarah Mohamed',
            specialty: 'Obstetrics and Gynecology',
            image: './images/doctor-3.avif'
        },
        {
            name: 'Dr. Hassan Youssef',
            specialty: 'General Surgery',
            image: './images/doctor-1.jpg'
        }
    ];

    function displayDoctors() {
        const doctorsContainer = document.querySelector('#doctors .row');
        doctorsContainer.innerHTML = '';

        doctors.forEach(doctor => {
            const doctorItem = document.createElement('div');
            doctorItem.classList.add('doctor-item');
            doctorItem.innerHTML = `
                <img src="${doctor.image}" alt="${doctor.name}" class="doctor-image" />
                <h3>${doctor.name}</h3>
                <p class="specialty">${doctor.specialty}</p>
                <button class="contact-doctor" data-doctor="${doctor.name}">Contact</button>
            `;
            doctorsContainer.appendChild(doctorItem);
        });

        const contactButtons = document.querySelectorAll('.contact-doctor');
        contactButtons.forEach(button => {
            button.addEventListener('click', function() {
                const doctorName = this.dataset.doctor;
                alert(`You clicked on Contact ${doctorName}`);
            });
        });
    }

    displayDoctors();
});