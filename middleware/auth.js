export default function (context) {
  // check if firebase logged in
  if (context.app.$fire.auth.currentUser == null) {
    context.redirect("/");
  }
}
