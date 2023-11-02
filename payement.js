document.addEventListener("DOMContentLoaded", function() {
    // Récupérer l'URL actuelle
    const urlParams = new URLSearchParams(window.location.search);
    
    // Récupérer le paramètre "total" de l'URL
    const total = urlParams.get("total");

    // Sélectionner l'élément input où vous souhaitez afficher le total
    const totalInput = document.getElementById("total-amount");

    // Afficher le total dans l'input
    totalInput.value = total;
    
    // Désactiver l'édition de l'input
    totalInput.readOnly = true;
});

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez le bouton "Pay"
    const payButton = document.getElementById("submit");

    // Écoutez l'événement clic sur le bouton "Pay"
    payButton.addEventListener("click", function () {
        // Créez un élément pour la notification
        const notification = document.createElement("div");
        notification.className = "success-notification";
        notification.textContent = "Paiement réussi";

        // Ajoutez la notification à la page
        document.body.appendChild(notification);

        // Supprimez la notification après quelques secondes
        setTimeout(function () {
            document.body.removeChild(notification);
        }, 100000); // La notification disparaîtra après 5 secondes (5000 millisecondes)
    });
});

  