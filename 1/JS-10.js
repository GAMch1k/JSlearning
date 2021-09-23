function ask(question, yes, no) {
    (confirm(question)) ? yes() : no ();
}

ask (
    "You accept?",
    () => alert ("You confirmed"),
    () => alert ("You deciline")
)