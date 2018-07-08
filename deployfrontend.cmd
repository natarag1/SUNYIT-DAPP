robocopy src docs /e
robocopy build\contracts docs
git add .
git commit -m "adding files to github"
git push
