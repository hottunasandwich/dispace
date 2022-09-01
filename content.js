window.addEventListener(
    "keydown",
    (e) => {
        if (e.path[0].tagName === "INPUT" || e.path[0].tagName === "TEXTAREA") {
            return;
        }
        for(var i=1;i<e.path.length;i++) {
            element = e.path[i]
            if (e.code == "Space") {
                console.log("Blocked Space")
                e.preventDefault();
                return;
            }
        }
    },
    true
)