

function toggleExpand(card, event) {
    // Check if the click target is inside a <select> or .card-content
    if (event.target.closest('select') || event.target.closest('.card-content')) {
        return;
    }

    // Close all other cards
    document.querySelectorAll('.card').forEach(c => {
        
        if (c !== card) {
            c.classList.remove('expanded');
        }else{
            const radioButton = card.querySelector('.card-radio');
            radioButton.checked = true;
        }
    });

    // Toggle the clicked card
    card.classList.toggle('expanded');
}

// const radioButton = card.querySelector('.card-radio');
//         if (card.classList.contains('expanded')) {
//             radioButton.checked = true;
//         } else {
//             radioButton.checked = false;
//         }

// Add event listeners to all cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function(event) {
        toggleExpand(this, event);
    });
});

