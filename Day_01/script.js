

const panels = document.querySelectorAll('.panel');         // select all the panels

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();                              // remove all active classes
        panel.classList.add('active');                      // add or remove active class
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
