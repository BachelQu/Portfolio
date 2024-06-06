document.addEventListener("DOMContentLoaded", function () {
  // Ajout d'un gestionnaire d'événements au formulaire
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher la soumission par défaut du formulaire

    // Récupérer les valeurs des champs
    var firstName = document.getElementById("first-name").value.trim();
    var lastName = document.getElementById("last-name").value.trim();
    var message = document.getElementById("message").value.trim();

    // Vérifier si tous les champs sont remplis
    if (firstName === "" || lastName === "" || message === "") {
      // Afficher le message d'erreur
      document.getElementById("error-message").style.display = "block";
      return; // Arrêter l'exécution du script si un champ est vide
    } else {
      // Cacher le message d'erreur s'il était affiché précédemment
      document.getElementById("error-message").style.display = "none";
    }

    // Créer un nouveau commentaire
    var newComment = document.createElement("div");
    newComment.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
    newComment.innerHTML = `
                <div class="flex-1 py-10 border-t border-gray-200">
                    <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
                    <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                        <p>${message}</p>
                    </div>
                </div>
            `;

    // Ajouter le nouveau commentaire à la liste des commentaires
    var commentList = document.getElementById("comment-list");
    commentList.appendChild(newComment);

    // Vider les champs du formulaire
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("message").value = "";
  });
});