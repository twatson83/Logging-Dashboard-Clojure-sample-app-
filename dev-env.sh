gnome-terminal --tab "autobuild cljs" -e "bash -c \"lein cljsbuild auto; exec bash\"" --tab "emacs" -e "bash -c \"emacs project.clj; exec bash\"" --tab "server" -e "bash -c \"lein run; exec bash\"" 
