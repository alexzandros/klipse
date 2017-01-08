(ns ^:figwheel-no-load klipse.core
  (:require
    [gadjett.core-fn :as gadjett]))

(enable-console-print!)
(gadjett/settings! :max-function-calls 100)

(def version "5.3.3")
(js/console.info "Klipse " version)
(js/console.info "Clojurescript " *clojurescript-version*)

