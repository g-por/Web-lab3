const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    confirmPassword.addEventListener("input", () => {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Паролі не співпадають");
        } else {
            confirmPassword.setCustomValidity("");
        }
    });