var currentURL = window.location.href;


if ("https://rohitnishad613.github.io" != currentURL) {
    var redirectURLs = [
        "https://rohitnishad613.github.io/keyword-golden-ratio-calculator/",
        "https://rohitnishad613.github.io/python-2-to-3-converter/",
        "https://rohitnishad613.github.io/genxadda/",
        "https://rohitnishad613.github.io/meta-tag-generator/",
        "https://rohitnishad613.github.io/keysuggest/",
    ];
    var redirectToURLs = [
        "https://360techexplorer.com/tools/keyword-golden-ratio-calculator",
        "https://360techexplorer.com/tools/python-2-to-3-converter",
        "https://genxadda-social.github.io",
        "https://360techexplorer.com/tools/meta-tag-generator",
        "https://360techexplorer.com/tools/keysuggest",
    ];
    var URlListLen = redirectURLs.length;
    var lastChrURL = currentURL?.slice(-1);
    if ("/" != lastChrURL) {
        currentURL = currentURL.concat("/");
        /*this.setState((prevState) => ({
                        currentURL: prevState.currentURL.concat("/"),
                    }));*/
    }
    var currentURLLowerCase = currentURL?.toLowerCase();
    for (let t = 0; t < URlListLen; t++) {
        if (currentURLLowerCase?.includes(redirectURLs[t].toLowerCase())) {
            var Str = `<!DOCTYPE html><html lang="en-US"><meta charset="utf-8"><title>Redirecting&hellip;</title><link rel="canonical" href="${redirectToURLs[t]}"><script>location="${redirectToURLs[t]}"<\/script><meta http-equiv="refresh" content="0; url=${redirectToURLs[t]}"><meta name="robots" content="noindex"><h1>Redirecting&hellip;</h1><a href="${redirectToURLs[t]}">Click here if you are not redirected.</a></html>`,
                newHTML = document.open("text/html", "replace");
            newHTML.write(Str);
            newHTML.close();
            break;
        }
    }
}
