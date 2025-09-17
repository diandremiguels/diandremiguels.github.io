window.onload = function() {
    const user = "sabale.d";
    const domain = "northeastern.edu";
    const email = `${user}@${domain}`;
    const mailtoLink = `<a href="mailto:${user}@${domain}">sabale [dot] d [at] northeastern [dot] edu</a>`;
    document.querySelectorAll(".email").forEach(el => {
        el.innerHTML = mailtoLink;
    });
}