var Doctum = {
    treeJson: {"tree":{"l":0,"n":"","p":"","c":[{"l":1,"n":"DirectoryTree","p":"DirectoryTree","c":[{"l":2,"n":"ImapEngine","p":"DirectoryTree/ImapEngine","c":[{"l":3,"n":"Collections","p":"DirectoryTree/ImapEngine/Collections","c":[{"l":4,"n":"FolderCollection","p":"DirectoryTree/ImapEngine/Collections/FolderCollection"},{"l":4,"n":"MessageCollection","p":"DirectoryTree/ImapEngine/Collections/MessageCollection"},{"l":4,"n":"PaginatedCollection","p":"DirectoryTree/ImapEngine/Collections/PaginatedCollection"},{"l":4,"n":"ResponseCollection","p":"DirectoryTree/ImapEngine/Collections/ResponseCollection"}]},{"l":3,"n":"Connection","p":"DirectoryTree/ImapEngine/Connection","c":[{"l":4,"n":"Loggers","p":"DirectoryTree/ImapEngine/Connection/Loggers","c":[{"l":5,"n":"EchoLogger","p":"DirectoryTree/ImapEngine/Connection/Loggers/EchoLogger"},{"l":5,"n":"FileLogger","p":"DirectoryTree/ImapEngine/Connection/Loggers/FileLogger"},{"l":5,"n":"Logger","p":"DirectoryTree/ImapEngine/Connection/Loggers/Logger"},{"l":5,"n":"LoggerInterface","p":"DirectoryTree/ImapEngine/Connection/Loggers/LoggerInterface"},{"l":5,"n":"RayLogger","p":"DirectoryTree/ImapEngine/Connection/Loggers/RayLogger"}]},{"l":4,"n":"Responses","p":"DirectoryTree/ImapEngine/Connection/Responses","c":[{"l":5,"n":"Data","p":"DirectoryTree/ImapEngine/Connection/Responses/Data","c":[{"l":6,"n":"Data","p":"DirectoryTree/ImapEngine/Connection/Responses/Data/Data"},{"l":6,"n":"ListData","p":"DirectoryTree/ImapEngine/Connection/Responses/Data/ListData"},{"l":6,"n":"ResponseCodeData","p":"DirectoryTree/ImapEngine/Connection/Responses/Data/ResponseCodeData"}]},{"l":5,"n":"ContinuationResponse","p":"DirectoryTree/ImapEngine/Connection/Responses/ContinuationResponse"},{"l":5,"n":"HasTokens","p":"DirectoryTree/ImapEngine/Connection/Responses/HasTokens"},{"l":5,"n":"MessageResponseParser","p":"DirectoryTree/ImapEngine/Connection/Responses/MessageResponseParser"},{"l":5,"n":"Response","p":"DirectoryTree/ImapEngine/Connection/Responses/Response"},{"l":5,"n":"TaggedResponse","p":"DirectoryTree/ImapEngine/Connection/Responses/TaggedResponse"},{"l":5,"n":"UntaggedResponse","p":"DirectoryTree/ImapEngine/Connection/Responses/UntaggedResponse"}]},{"l":4,"n":"Streams","p":"DirectoryTree/ImapEngine/Connection/Streams","c":[{"l":5,"n":"FakeStream","p":"DirectoryTree/ImapEngine/Connection/Streams/FakeStream"},{"l":5,"n":"ImapStream","p":"DirectoryTree/ImapEngine/Connection/Streams/ImapStream"},{"l":5,"n":"StreamInterface","p":"DirectoryTree/ImapEngine/Connection/Streams/StreamInterface"}]},{"l":4,"n":"Tokens","p":"DirectoryTree/ImapEngine/Connection/Tokens","c":[{"l":5,"n":"Atom","p":"DirectoryTree/ImapEngine/Connection/Tokens/Atom"},{"l":5,"n":"Crlf","p":"DirectoryTree/ImapEngine/Connection/Tokens/Crlf"},{"l":5,"n":"EmailAddress","p":"DirectoryTree/ImapEngine/Connection/Tokens/EmailAddress"},{"l":5,"n":"ListClose","p":"DirectoryTree/ImapEngine/Connection/Tokens/ListClose"},{"l":5,"n":"ListOpen","p":"DirectoryTree/ImapEngine/Connection/Tokens/ListOpen"},{"l":5,"n":"Literal","p":"DirectoryTree/ImapEngine/Connection/Tokens/Literal"},{"l":5,"n":"Number","p":"DirectoryTree/ImapEngine/Connection/Tokens/Number"},{"l":5,"n":"QuotedString","p":"DirectoryTree/ImapEngine/Connection/Tokens/QuotedString"},{"l":5,"n":"ResponseCodeClose","p":"DirectoryTree/ImapEngine/Connection/Tokens/ResponseCodeClose"},{"l":5,"n":"ResponseCodeOpen","p":"DirectoryTree/ImapEngine/Connection/Tokens/ResponseCodeOpen"},{"l":5,"n":"Token","p":"DirectoryTree/ImapEngine/Connection/Tokens/Token"}]},{"l":4,"n":"ConnectionInterface","p":"DirectoryTree/ImapEngine/Connection/ConnectionInterface"},{"l":4,"n":"ImapCommand","p":"DirectoryTree/ImapEngine/Connection/ImapCommand"},{"l":4,"n":"ImapConnection","p":"DirectoryTree/ImapEngine/Connection/ImapConnection"},{"l":4,"n":"ImapParser","p":"DirectoryTree/ImapEngine/Connection/ImapParser"},{"l":4,"n":"ImapQueryBuilder","p":"DirectoryTree/ImapEngine/Connection/ImapQueryBuilder"},{"l":4,"n":"ImapTokenizer","p":"DirectoryTree/ImapEngine/Connection/ImapTokenizer"},{"l":4,"n":"RawQueryValue","p":"DirectoryTree/ImapEngine/Connection/RawQueryValue"},{"l":4,"n":"Result","p":"DirectoryTree/ImapEngine/Connection/Result"}]},{"l":3,"n":"Exceptions","p":"DirectoryTree/ImapEngine/Exceptions","c":[{"l":4,"n":"Exception","p":"DirectoryTree/ImapEngine/Exceptions/Exception"},{"l":4,"n":"ImapCapabilityException","p":"DirectoryTree/ImapEngine/Exceptions/ImapCapabilityException"},{"l":4,"n":"ImapCommandException","p":"DirectoryTree/ImapEngine/Exceptions/ImapCommandException"},{"l":4,"n":"ImapConnectionClosedException","p":"DirectoryTree/ImapEngine/Exceptions/ImapConnectionClosedException"},{"l":4,"n":"ImapConnectionException","p":"DirectoryTree/ImapEngine/Exceptions/ImapConnectionException"},{"l":4,"n":"ImapConnectionFailedException","p":"DirectoryTree/ImapEngine/Exceptions/ImapConnectionFailedException"},{"l":4,"n":"ImapConnectionTimedOutException","p":"DirectoryTree/ImapEngine/Exceptions/ImapConnectionTimedOutException"},{"l":4,"n":"ImapParserException","p":"DirectoryTree/ImapEngine/Exceptions/ImapParserException"},{"l":4,"n":"ImapResponseException","p":"DirectoryTree/ImapEngine/Exceptions/ImapResponseException"},{"l":4,"n":"ImapStreamException","p":"DirectoryTree/ImapEngine/Exceptions/ImapStreamException"},{"l":4,"n":"RuntimeException","p":"DirectoryTree/ImapEngine/Exceptions/RuntimeException"}]},{"l":3,"n":"Pagination","p":"DirectoryTree/ImapEngine/Pagination","c":[{"l":4,"n":"LengthAwarePaginator","p":"DirectoryTree/ImapEngine/Pagination/LengthAwarePaginator"}]},{"l":3,"n":"Support","p":"DirectoryTree/ImapEngine/Support","c":[{"l":4,"n":"ForwardsCalls","p":"DirectoryTree/ImapEngine/Support/ForwardsCalls"},{"l":4,"n":"Str","p":"DirectoryTree/ImapEngine/Support/Str"}]},{"l":3,"n":"Testing","p":"DirectoryTree/ImapEngine/Testing","c":[{"l":4,"n":"FakeFolder","p":"DirectoryTree/ImapEngine/Testing/FakeFolder"},{"l":4,"n":"FakeFolderRepository","p":"DirectoryTree/ImapEngine/Testing/FakeFolderRepository"},{"l":4,"n":"FakeMailbox","p":"DirectoryTree/ImapEngine/Testing/FakeMailbox"},{"l":4,"n":"FakeMessage","p":"DirectoryTree/ImapEngine/Testing/FakeMessage"},{"l":4,"n":"FakeMessageQuery","p":"DirectoryTree/ImapEngine/Testing/FakeMessageQuery"}]},{"l":3,"n":"Address","p":"DirectoryTree/ImapEngine/Address"},{"l":3,"n":"Attachment","p":"DirectoryTree/ImapEngine/Attachment"},{"l":3,"n":"ComparesFolders","p":"DirectoryTree/ImapEngine/ComparesFolders"},{"l":3,"n":"DraftMessage","p":"DirectoryTree/ImapEngine/DraftMessage"},{"l":3,"n":"FileMessage","p":"DirectoryTree/ImapEngine/FileMessage"},{"l":3,"n":"FlaggableInterface","p":"DirectoryTree/ImapEngine/FlaggableInterface"},{"l":3,"n":"Folder","p":"DirectoryTree/ImapEngine/Folder"},{"l":3,"n":"FolderInterface","p":"DirectoryTree/ImapEngine/FolderInterface"},{"l":3,"n":"FolderRepository","p":"DirectoryTree/ImapEngine/FolderRepository"},{"l":3,"n":"FolderRepositoryInterface","p":"DirectoryTree/ImapEngine/FolderRepositoryInterface"},{"l":3,"n":"HasFlags","p":"DirectoryTree/ImapEngine/HasFlags"},{"l":3,"n":"HasParsedMessage","p":"DirectoryTree/ImapEngine/HasParsedMessage"},{"l":3,"n":"Idle","p":"DirectoryTree/ImapEngine/Idle"},{"l":3,"n":"Mailbox","p":"DirectoryTree/ImapEngine/Mailbox"},{"l":3,"n":"MailboxInterface","p":"DirectoryTree/ImapEngine/MailboxInterface"},{"l":3,"n":"Mbox","p":"DirectoryTree/ImapEngine/Mbox"},{"l":3,"n":"Message","p":"DirectoryTree/ImapEngine/Message"},{"l":3,"n":"MessageInterface","p":"DirectoryTree/ImapEngine/MessageInterface"},{"l":3,"n":"MessageParser","p":"DirectoryTree/ImapEngine/MessageParser"},{"l":3,"n":"MessageQuery","p":"DirectoryTree/ImapEngine/MessageQuery"},{"l":3,"n":"MessageQueryInterface","p":"DirectoryTree/ImapEngine/MessageQueryInterface"},{"l":3,"n":"Poll","p":"DirectoryTree/ImapEngine/Poll"},{"l":3,"n":"QueriesMessages","p":"DirectoryTree/ImapEngine/QueriesMessages"}]}]}]},"treeOpenLevel":2},
    /** @var boolean */
    treeLoaded: false,
    /** @var boolean */
    listenersRegistered: false,
    autoCompleteData: null,
    /** @var boolean */
    autoCompleteLoading: false,
    /** @var boolean */
    autoCompleteLoaded: false,
    /** @var string|null */
    rootPath: null,
    /** @var string|null */
    autoCompleteDataUrl: null,
    /** @var HTMLElement|null */
    doctumSearchAutoComplete: null,
    /** @var HTMLElement|null */
    doctumSearchAutoCompleteProgressBarContainer: null,
    /** @var HTMLElement|null */
    doctumSearchAutoCompleteProgressBar: null,
    /** @var number */
    doctumSearchAutoCompleteProgressBarPercent: 0,
    /** @var autoComplete|null */
    autoCompleteJS: null,
    querySearchSecurityRegex: /([^0-9a-zA-Z:\\\\_\s])/gi,
    buildTreeNode: function (treeNode, htmlNode, treeOpenLevel) {
        var ulNode = document.createElement('ul');
        for (var childKey in treeNode.c) {
            var child = treeNode.c[childKey];
            var liClass = document.createElement('li');
            var hasChildren = child.hasOwnProperty('c');
            var nodeSpecialName = (hasChildren ? 'namespace:' : 'class:') + child.p.replace(/\//g, '_');
            liClass.setAttribute('data-name', nodeSpecialName);

            // Create the node that will have the text
            var divHd = document.createElement('div');
            var levelCss = child.l - 1;
            divHd.className = hasChildren ? 'hd' : 'hd leaf';
            divHd.style.paddingLeft = (hasChildren ? (levelCss * 18) : (8 + (levelCss * 18))) + 'px';
            if (hasChildren) {
                if (child.l <= treeOpenLevel) {
                    liClass.className = 'opened';
                }
                var spanIcon = document.createElement('span');
                spanIcon.className = 'icon icon-play';
                divHd.appendChild(spanIcon);
            }
            var aLink = document.createElement('a');

            // Edit the HTML link to work correctly based on the current depth
            aLink.href = Doctum.rootPath + child.p + '.html';
            aLink.innerText = child.n;
            divHd.appendChild(aLink);
            liClass.appendChild(divHd);

            // It has children
            if (hasChildren) {
                var divBd = document.createElement('div');
                divBd.className = 'bd';
                Doctum.buildTreeNode(child, divBd, treeOpenLevel);
                liClass.appendChild(divBd);
            }
            ulNode.appendChild(liClass);
        }
        htmlNode.appendChild(ulNode);
    },
    initListeners: function () {
        if (Doctum.listenersRegistered) {
            // Quick exit, already registered
            return;
        }
                Doctum.listenersRegistered = true;
    },
    loadTree: function () {
        if (Doctum.treeLoaded) {
            // Quick exit, already registered
            return;
        }
        Doctum.rootPath = document.body.getAttribute('data-root-path');
        Doctum.buildTreeNode(Doctum.treeJson.tree, document.getElementById('api-tree'), Doctum.treeJson.treeOpenLevel);

        // Toggle left-nav divs on click
        $('#api-tree .hd span').on('click', function () {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }
        Doctum.treeLoaded = true;
    },
    pagePartiallyLoaded: function (event) {
        Doctum.initListeners();
        Doctum.loadTree();
        Doctum.loadAutoComplete();
    },
    pageFullyLoaded: function (event) {
        // it may not have received DOMContentLoaded event
        Doctum.initListeners();
        Doctum.loadTree();
        Doctum.loadAutoComplete();
        // Fire the event in the search page too
        if (typeof DoctumSearch === 'object') {
            DoctumSearch.pageFullyLoaded();
        }
    },
    loadAutoComplete: function () {
        if (Doctum.autoCompleteLoaded) {
            // Quick exit, already loaded
            return;
        }
        Doctum.autoCompleteDataUrl = document.body.getAttribute('data-search-index-url');
        Doctum.doctumSearchAutoComplete = document.getElementById('doctum-search-auto-complete');
        Doctum.doctumSearchAutoCompleteProgressBarContainer = document.getElementById('search-progress-bar-container');
        Doctum.doctumSearchAutoCompleteProgressBar = document.getElementById('search-progress-bar');
        if (Doctum.doctumSearchAutoComplete !== null) {
            // Wait for it to be loaded
            Doctum.doctumSearchAutoComplete.addEventListener('init', function (_) {
                Doctum.autoCompleteLoaded = true;
                Doctum.doctumSearchAutoComplete.addEventListener('selection', function (event) {
                    // Go to selection page
                    window.location = Doctum.rootPath + event.detail.selection.value.p;
                });
                Doctum.doctumSearchAutoComplete.addEventListener('navigate', function (event) {
                    // Set selection in text box
                    if (typeof event.detail.selection.value === 'object') {
                        Doctum.doctumSearchAutoComplete.value = event.detail.selection.value.n;
                    }
                });
                Doctum.doctumSearchAutoComplete.addEventListener('results', function (event) {
                    Doctum.markProgressFinished();
                });
            });
        }
        // Check if the lib is loaded
        if (typeof autoComplete === 'function') {
            Doctum.bootAutoComplete();
        }
    },
    markInProgress: function () {
            Doctum.doctumSearchAutoCompleteProgressBarContainer.className = 'search-bar';
            Doctum.doctumSearchAutoCompleteProgressBar.className = 'progress-bar indeterminate';
            if (typeof DoctumSearch === 'object' && DoctumSearch.pageFullyLoaded) {
                DoctumSearch.doctumSearchPageAutoCompleteProgressBarContainer.className = 'search-bar';
                DoctumSearch.doctumSearchPageAutoCompleteProgressBar.className = 'progress-bar indeterminate';
            }
    },
    markProgressFinished: function () {
        Doctum.doctumSearchAutoCompleteProgressBarContainer.className = 'search-bar hidden';
        Doctum.doctumSearchAutoCompleteProgressBar.className = 'progress-bar';
        if (typeof DoctumSearch === 'object' && DoctumSearch.pageFullyLoaded) {
            DoctumSearch.doctumSearchPageAutoCompleteProgressBarContainer.className = 'search-bar hidden';
            DoctumSearch.doctumSearchPageAutoCompleteProgressBar.className = 'progress-bar';
        }
    },
    makeProgess: function () {
        Doctum.makeProgressOnProgressBar(
            Doctum.doctumSearchAutoCompleteProgressBarPercent,
            Doctum.doctumSearchAutoCompleteProgressBar
        );
        if (typeof DoctumSearch === 'object' && DoctumSearch.pageFullyLoaded) {
            Doctum.makeProgressOnProgressBar(
                Doctum.doctumSearchAutoCompleteProgressBarPercent,
                DoctumSearch.doctumSearchPageAutoCompleteProgressBar
            );
        }
    },
    loadAutoCompleteData: function (query) {
        return new Promise(function (resolve, reject) {
            if (Doctum.autoCompleteData !== null) {
                resolve(Doctum.autoCompleteData);
                return;
            }
            Doctum.markInProgress();
            function reqListener() {
                Doctum.autoCompleteLoading = false;
                Doctum.autoCompleteData = JSON.parse(this.responseText).items;
                Doctum.markProgressFinished();

                setTimeout(function () {
                    resolve(Doctum.autoCompleteData);
                }, 50);// Let the UI render once before sending the results for processing. This gives time to the progress bar to hide
            }
            function reqError(err) {
                Doctum.autoCompleteLoading = false;
                Doctum.autoCompleteData = null;
                console.error(err);
                reject(err);
            }

            var oReq = new XMLHttpRequest();
            oReq.onload = reqListener;
            oReq.onerror = reqError;
            oReq.onprogress = function (pe) {
                if (pe.lengthComputable) {
                    Doctum.doctumSearchAutoCompleteProgressBarPercent = parseInt(pe.loaded / pe.total * 100, 10);
                    Doctum.makeProgess();
                }
            };
            oReq.onloadend = function (_) {
                Doctum.markProgressFinished();
            };
            oReq.open('get', Doctum.autoCompleteDataUrl, true);
            oReq.send();
        });
    },
    /**
     * Make some progress on a progress bar
     *
     * @param number percentage
     * @param HTMLElement progressBar
     * @return void
     */
    makeProgressOnProgressBar: function(percentage, progressBar) {
        progressBar.className = 'progress-bar';
        progressBar.style.width = percentage + '%';
        progressBar.setAttribute(
            'aria-valuenow', percentage
        );
    },
    searchEngine: function (query, record) {
        if (typeof query !== 'string') {
            return '';
        }
        // replace all (mode = g) spaces and non breaking spaces (\s) by pipes
        // g = global mode to mark also the second word searched
        // i = case insensitive
        // how this function works:
        // First: search if the query has the keywords in sequence
        // Second: replace the keywords by a mark and leave all the text in between non marked
        
        if (record.match(new RegExp('(' + query.replace(/\s/g, ').*(') + ')', 'gi')) === null) {
            return '';// Does not match
        }

        var replacedRecord = record.replace(new RegExp('(' + query.replace(/\s/g, '|') + ')', 'gi'), function (group) {
            return '<mark class="auto-complete-highlight">' + group + '</mark>';
        });

        if (replacedRecord !== record) {
            return replacedRecord;// This should not happen but just in case there was no match done
        }

        return '';
    },
    /**
     * Clean the search query
     *
     * @param string|null query
     * @return string
     */
    cleanSearchQuery: function (query) {
        if (typeof query !== 'string') {
            return '';
        }
        // replace any chars that could lead to injecting code in our regex
        // remove start or end spaces
        // replace backslashes by an escaped version, use case in search: \myRootFunction
        return query.replace(Doctum.querySearchSecurityRegex, '').trim().replace(/\\/g, '\\\\');
    },
    bootAutoComplete: function () {
        Doctum.autoCompleteJS = new autoComplete(
            {
                selector: '#doctum-search-auto-complete',
                searchEngine: function (query, record) {
                    return Doctum.searchEngine(query, record);
                },
                submit: true,
                data: {
                    src: function (q) {
                        Doctum.markInProgress();
                        return Doctum.loadAutoCompleteData(q);
                    },
                    keys: ['n'],// Data 'Object' key to be searched
                    cache: false, // Is not compatible with async fetch of data
                },
                query: (input) => {
                    return Doctum.cleanSearchQuery(input);
                },
                trigger: (query) => {
                    return Doctum.cleanSearchQuery(query).length > 0;
                },
                resultsList: {
                    tag: 'ul',
                    class: 'auto-complete-dropdown-menu',
                    destination: '#auto-complete-results',
                    position: 'afterbegin',
                    maxResults: 500,
                    noResults: false,
                },
                resultItem: {
                    tag: 'li',
                    class: 'auto-complete-result',
                    highlight: 'auto-complete-highlight',
                    selected: 'auto-complete-selected'
                },
            }
        );
    }
};


document.addEventListener('DOMContentLoaded', Doctum.pagePartiallyLoaded, false);
window.addEventListener('load', Doctum.pageFullyLoaded, false);
