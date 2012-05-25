


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>dox/dev/jquery.md at master · thlorenz/dox</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="mp8y7JZuckfb7k8MDay8zxKpZk5TikBrP6WpV6iHp/w=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-070556cfb2a5413d1f2e027d59a877217fed21ca.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github2-35faa12e3b0c226402d1d2221db8248649e733be.css" media="screen" rel="stylesheet" type="text/css" />
    
    


    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/frameworks-e417ea70cc7daa9aad62382cb6b5d0c94acfb8f4.js" type="text/javascript"></script>
    
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/github-b40033589d41388d3b5dd7e0f7b00e536c88a54e.js" type="text/javascript"></script>
    
    

      <link rel='permalink' href='/thlorenz/dox/blob/4b28f3159acc10f9b7e733aa5ead89787a02ed80/dev/jquery.md'>
    <meta property="og:title" content="dox"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/thlorenz/dox"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1329275975"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Notes and cheat sheets on various topics. Contribute to dox development by creating an account on GitHub."/>

    <meta name="description" content="Notes and cheat sheets on various topics. Contribute to dox development by creating an account on GitHub." />

  <link href="https://github.com/thlorenz/dox/commits/master.atom" rel="alternate" title="Recent Commits to dox:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob  vis-public env-production " data-blob-contribs-enabled="yes">
    <div id="wrapper">

    
    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/">
            <!--[if IE]>
            <img alt="GitHub" class="github-logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7.png?1323882799" />
            <img alt="GitHub" class="github-logo-hover" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7-hover.png?1324325436" />
            <![endif]-->
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1337118069" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1337118069" />
          </a>

              
    <div class="topsearch  ">
        <form accept-charset="UTF-8" action="/search" id="top_search_form" method="get">
  <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search"><span class="mini-icon mini-icon-advanced-search"></span></a>
  <div class="search placeholder-field js-placeholder-field">
    <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" spellcheck="false" autocomplete="off" data-autocomplete="my-repos-autocomplete" placeholder="Search&hellip;" data-hotkey="s" />
    <div id="my-repos-autocomplete" class="autocomplete-results">
      <ul class="js-navigation-container"></ul>
    </div>
    <input type="submit" value="Search" class="button">
    <span class="mini-icon mini-icon-search-input"></span>
  </div>
  <input type="hidden" name="type" value="Everything" />
  <input type="hidden" name="repo" value="" />
  <input type="hidden" name="langOverride" value="" />
  <input type="hidden" name="start_value" value="1" />
</form>

      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            


  <div id="userbox">
    <div id="user">
      <a href="https://github.com/thlorenz"><img height="20" src="https://secure.gravatar.com/avatar/1c9054d6242bffd5fd25ec652a2b79cc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
      <a href="https://github.com/thlorenz" class="name">thlorenz</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a New Repo"><span class="mini-icon mini-icon-create"></span></a>
      </li>
      <li>
        <a href="/inbox/notifications" id="notifications" class="tooltipped downwards" title="Notifications">
          <span class="mini-icon mini-icon-notifications"></span>
        </a>
      </li>
      <li><a href="/settings/profile" id="settings" class="tooltipped downwards" title="Account Settings"><span class="mini-icon mini-icon-account-settings"></span></a></li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Log Out"><span class="mini-icon mini-icon-logout"></span></a>
      </li>
    </ul>
  </div>



          
        </div>
      </div>

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          



              <ul class="pagehead-actions">

          <li class="for-owner"><a href="/thlorenz/dox/admin" class="minibutton btn-admin "><span class="icon"></span>Admin</a></li>

              <li class="nspr">
                <a href="/thlorenz/dox/pull/new/master" class="minibutton btn-pull-request "><span class="icon"></span>Pull Request</a>
              </li>

          <li class="js-toggler-container js-social-container watch-button-container on">
            <span class="watch-button"><a href="/thlorenz/dox/toggle_watch" class="minibutton btn-watch js-toggler-target lighter" data-remote="true" data-method="post" rel="nofollow"><span class="icon"></span> Watch</a><a class="social-count js-social-count" href="/thlorenz/dox/watchers">1</a></span>
            <span class="unwatch-button"><a href="/thlorenz/dox/toggle_watch" class="minibutton btn-unwatch js-toggler-target lighter" data-remote="true" data-method="post" rel="nofollow"><span class="icon"></span> Unwatch</a><a class="social-count js-social-count" href="/thlorenz/dox/watchers">1</a></span>
          </li>

              <li><a href="/thlorenz/dox/fork" class="minibutton btn-fork js-toggler-target fork-button lighter" rel="nofollow" data-method="post"><span class="icon"></span> Fork</a><a href="/thlorenz/dox/network" class="social-count">1</a>
              </li>


    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title">
            <span class="repo-label"><span class="public">public</span></span>
            <span class="mega-icon mega-icon-public-repo"></span>
            <span class="author vcard">
<a href="/thlorenz" class="url fn" itemprop="url" rel="author">              <span itemprop="title">thlorenz</span>
              </a></span> /
            <strong><a href="/thlorenz/dox" class="js-current-repository">dox</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/thlorenz/dox" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/thlorenz/dox/network" highlight="repo_network">Network</a>
    <li><a href="/thlorenz/dox/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/thlorenz/dox/issues" highlight="repo_issues">Issues <span class='counter'>0</span></a></li>

      <li><a href="/thlorenz/dox/wiki" highlight="repo_wiki">Wiki</a></li>

    <li><a href="/thlorenz/dox/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>

  </ul>
 
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/thlorenz/dox/tree-list/4b28f3159acc10f9b7e733aa5ead89787a02ed80"
      data-blob-url-prefix="/thlorenz/dox/blob/4b28f3159acc10f9b7e733aa5ead89787a02ed80"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/thlorenz/dox">dox</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/thlorenz/dox/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/thlorenz/dox/tags" class="blank" highlight="repo_tags">Tags <span class="counter">0</span></a></li>
    <li><a href="/thlorenz/dox/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container js-context-menu">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-hotkey="w"
           data-master-branch="master"
           data-ref="master">
           <span><span class="icon"></span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
          <div class="context-title">Switch Branches/Tags</div>
          <div class="context-body pane-selector commitish-selector js-navigation-container">
            <div class="filterbar">
              <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

            <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field">
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/thlorenz/dox/blob/master/dev/jquery.md" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
            </div>

            <div class="js-filter-tab js-filter-tags" style="display:none" data-filterable-for="context-commitish-filter-field">
              <div class="no-results js-not-filterable">Nothing to show</div>
            </div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/thlorenz/dox" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/thlorenz/dox/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/thlorenz/dox/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">1</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        





<!-- block_view_fragment_key: views10/v8/blob:v21:8e89f07564c961a743f5141e9c7833e7 -->
  <div id="slider">

    <div class="breadcrumb" data-path="dev/jquery.md/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/thlorenz/dox/tree/4b28f3159acc10f9b7e733aa5ead89787a02ed80" class="js-rewrite-sha" itemprop="url"><span itemprop="title">dox</span></a></b> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/thlorenz/dox/tree/4b28f3159acc10f9b7e733aa5ead89787a02ed80/dev" class="js-rewrite-sha" itemscope="url"><span itemprop="title">dev</span></a></span> / <strong class="final-path">jquery.md</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="dev/jquery.md" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>


      <div class="commit file-history-tease" data-path="dev/jquery.md/">
        <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/1c9054d6242bffd5fd25ec652a2b79cc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
        <span class="author"><a href="/thlorenz">thlorenz</a></span>
        <time class="js-relative-date" datetime="2012-05-20T19:52:34-07:00" title="2012-05-20 19:52:34">May 20, 2012</time>
        <div class="commit-title">
            <a href="/thlorenz/dox/commit/4b28f3159acc10f9b7e733aa5ead89787a02ed80" class="message">more jquery widget info</a>
        </div>

        <div class="participation">
          <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
          
        </div>
        <div id="blob_contributors_box" style="display:none">
          <h2>Users on GitHub who have contributed to this file</h2>
          <ul class="facebox-user-list">
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/1c9054d6242bffd5fd25ec652a2b79cc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/thlorenz">thlorenz</a>
            </li>
          </ul>
        </div>
      </div>

    <div class="frames">
      <div class="frame frame-center" data-path="dev/jquery.md/" data-permalink-url="/thlorenz/dox/blob/4b28f3159acc10f9b7e733aa5ead89787a02ed80/dev/jquery.md" data-title="dox/dev/jquery.md at master · thlorenz/dox · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>216 lines (145 sloc)</span>
                <span>7.635 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/thlorenz/dox/edit/4b28f3159acc10f9b7e733aa5ead89787a02ed80/dev/jquery.md" data-method="post" rel="nofollow" data-hotkey="e">Edit this file</a>
                  </li>

                <li>
                  <a href="/thlorenz/dox/raw/master/dev/jquery.md" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url"><span class="icon"></span>Raw</a>
                </li>
                  <li>
                    <a href="/thlorenz/dox/blame/master/dev/jquery.md" class="minibutton btn-blame grouped-button bigger lighter"><span class="icon"></span>Blame</a>
                  </li>
                <li>
                  <a href="/thlorenz/dox/commits/master/dev/jquery.md" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow"><span class="icon"></span>History</a>
                </li>
              </ul>
            </div>
            
  <div id="readme" class="blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a name="table-of-contents" class="anchor" href="#table-of-contents"><span class="mini-icon mini-icon-link"></span></a>Table of Contents</h1>

<ul>
<li>
<a href="#Events">Events</a>

<ul>
<li><a href="#on">on</a></li>
<li><a href="#off">off</a></li>
<li><a href="#trigger">trigger</a></li>
</ul>
</li>
<li>
<a href="#widget-factory">Widget Factory</a>

<ul>
<li><a href="#infrastructure">infrastructure</a></li>
<li><a href="#instance-properties">instance-properties</a></li>
<li><a href="#extra-instance-methods-not-mentioned-in-infrastructure">extra-instance-methods-not-mentioned-in-infrastructure</a></li>
<li><a href="#inner-workings">inner-workings</a></li>
</ul>
</li>
</ul><h1>
<a name="events" class="anchor" href="#events"><span class="mini-icon mini-icon-link"></span></a>Events</h1>

<p><a href="http://api.jquery.com/category/events/event-handler-attachment/">Event Handler Attachment</a></p>

<h2>
<a name="event-object" class="anchor" href="#event-object"><span class="mini-icon mini-icon-link"></span></a>Event Object</h2>

<p><a href="http://api.jquery.com/category/event-object/">doc page</a></p>

<h3>
<a name="creation" class="anchor" href="#creation"><span class="mini-icon mini-icon-link"></span></a>Creation</h3>

<ul>
<li><code>jQuery.Event('name')</code></li>
<li>can be used to later trigger it</li>
</ul><h3>
<a name="properties" class="anchor" href="#properties"><span class="mini-icon mini-icon-link"></span></a>Properties</h3>

<ul>
<li>
<strong>target:</strong>               event initiating element</li>
<li>
<strong>currentTarget:</strong>        current element within bubbling phase</li>
<li>
<strong>delegateTarget:</strong>       element where currently called handler was attached</li>
<li>
<strong>relatedTarget</strong>         other element involved in event (if any)</li>
<li>
<strong>namespace:</strong>            specified when event was triggered</li>
<li>
<strong>pageX, pageY:</strong>         mouse position</li>
<li>
<strong>data:</strong>                 optional data map</li>
<li>
<strong>result:</strong>               value returned by last handler triggered by this event</li>
<li>
<strong>timeStamp:</strong>            in milliseconds</li>
<li>
<strong>which:</strong>                indicates keys/buttons pressed</li>
</ul><h2>
<a name="propagation" class="anchor" href="#propagation"><span class="mini-icon mini-icon-link"></span></a>Propagation</h2>

<ul>
<li>all events bubble to the document</li>
<li>all event handlers attached to an element in its path are executed</li>
<li>stop bubbling: <code>event.stopProagation</code>
</li>
<li>prevent other handlers on same element from executing: <code>event.stopImmediatePropagation</code> (they execute in order they are bound)</li>
<li>prevent browser's default action <code>event.preventDefault</code>
</li>
<li>returning false from event handler calls <code>event.stopPropagation</code> and <code>event.preventDefaults</code>, a shortcut for this is to substitue handler function with <code>false</code>
</li>
</ul><h2>
<a name="performance" class="anchor" href="#performance"><span class="mini-icon mini-icon-link"></span></a>Performance</h2>

<ul>
<li>attach as close to event targets as possible (e.g., attaching to document causes events from everywhere to be evaluated there)</li>
</ul><h3>
<a name="advantages-of-using-selector-delegated-evenst" class="anchor" href="#advantages-of-using-selector-delegated-evenst"><span class="mini-icon mini-icon-link"></span></a>Advantages of using selector (delegated evenst)</h3>

<ul>
<li>allows subscribing to child element's events before they are added</li>
<li>much lower overhead (less event handlers)</li>
</ul><h2>
<a name="on-vs-bind-live-and-delegate" class="anchor" href="#on-vs-bind-live-and-delegate"><span class="mini-icon mini-icon-link"></span></a><code>on</code> vs <code>bind</code>, <code>live</code> and <code>delegate</code>
</h2>

<ul>
<li>in a nutshell - use <code>on</code> only (all others get mapped to <code>on</code> anyways)</li>
<li>more in this <a href="http://stackoverflow.com/questions/8065305/whats-the-difference-between-on-and-live-or-bind">stackoverflow answer</a>
</li>
</ul><h2>
<a name="on" class="anchor" href="#on"><span class="mini-icon mini-icon-link"></span></a>.on</h2>

<p><a href="http://api.jquery.com/on/">doc page</a></p>

<h3>
<a name="signatures" class="anchor" href="#signatures"><span class="mini-icon mini-icon-link"></span></a>Signatures</h3>

<p><code>.on(events [, selector] [,data], handler(event))</code>
<code>.on(events-map [, selector] [,data])</code></p>

<ul>
<li>
<strong>events:</strong>     space-separated event types and optional namespaces</li>
<li>
<strong>selector:</strong>   filters descendants of selected elements that trigger the event</li>
<li>
<strong>data:</strong>       data passed to event.data</li>
<li>
<strong>handler:</strong>    executed when triggered</li>
<li>
<strong>events-map:</strong> map of <strong>keys</strong> <em>space separated event types</em> and <strong>values</strong> <em>event handlers</em>
</li>
</ul><h2>
<a name="off" class="anchor" href="#off"><span class="mini-icon mini-icon-link"></span></a>.off</h2>

<p><a href="http://api.jquery.com/off/">doc page</a></p>

<ul>
<li>removes events handlers that fit <strong>all</strong> given filtering arguments</li>
<li>
<code>"**"</code> removes all delegated events without removing non-delegated ones</li>
</ul><h3>
<a name="signatures-1" class="anchor" href="#signatures-1"><span class="mini-icon mini-icon-link"></span></a>Signatures</h3>

<p><code>.off(events [, selector] [, handler(eventObject)])
</code>.off(events-map [, selector])`</p>

<ul>
<li>
<strong>selector:</strong> should match selector passed to <code>on</code>
</li>
<li>
<strong>handler:</strong>  handler previously attached for the events</li>
</ul><h2>
<a name="trigger" class="anchor" href="#trigger"><span class="mini-icon mini-icon-link"></span></a>.trigger</h2>

<p><a href="http://api.jquery.com/trigger/">doc page</a></p>

<ul>
<li>executes <strong>all</strong> handlers attached to matched elements for event type</li>
</ul><h3>
<a name="signatures-2" class="anchor" href="#signatures-2"><span class="mini-icon mini-icon-link"></span></a>Signatures</h3>

<p><code>.trigger(eventType[, params])</code>
<code>.trigger(event)</code></p>

<ul>
<li>
<strong>eventType:</strong>    e.g., 'click'</li>
<li>
<strong>params:</strong>       additional params passed to handler</li>
<li>
<strong>event:</strong>        event object</li>
</ul><h1>
<a name="widget-factory" class="anchor" href="#widget-factory"><span class="mini-icon mini-icon-link"></span></a>Widget Factory</h1>

<p><a href="http://wiki.jqueryui.com/w/page/12138135/Widget%20factory">doc page</a></p>

<h2>
<a name="what" class="anchor" href="#what"><span class="mini-icon mini-icon-link"></span></a>What</h2>

<ul>
<li>simple function that takes 2 or 3 args

<ul>
<li>'namespace.widgetname'

<ul>
<li>creates <code>jQuery.namespace</code>, <code>jQuery.namespace.widgetname</code> and <code>jQuery.namespace.widgetname.prototype</code>
</li>
</ul>
</li>
<li>existing prototype to inherit from (optional)

<ul>
<li>if no prototype is given, widget inherits directly from <code>jQuery.Widget</code>
</li>
</ul>
</li>
<li>object literal to become widget's prototype

<ul>
<li>is transformed into prototype for eahc instance of the widget</li>
<li>widget's prototype is connected to any super widgets down to <code>jQuery.Widget</code>
</li>
</ul>
</li>
</ul>
</li>
</ul><h2>
<a name="why" class="anchor" href="#why"><span class="mini-icon mini-icon-link"></span></a>Why</h2>

<ul>
<li>automatic <strong>pseudo selector</strong> creation <code>$(':namespace-widgetname')</code>
</li>
<li>prototype linked to <code>jQuery.fn</code> via <code>jQuery.widget.bridge</code>
</li>
<li>default options merged with user's overrides</li>
<li>plugin instance accessible via <code>$('#id').data('widgetname')</code>
</li>
<li>reference to jQuery object containing DOM element available as widget instance property <code>this.element</code>
</li>
<li>widget's methods accesible via <code>$('#id').widgetname('methodname')</code> or <code>$('#id').data('widgetname').methodname()</code>
</li>
<li>multiple instantiation of widget on same element prevented</li>
<li>dispatching callbacks via <code>this._trigger('eventname')</code>
</li>
<li>mechanism to allow responding to plugin option changes after instantiation
via <code>$('#id').widgetname('option', 'optname', function (event) { ... })</code>
</li>
<li>
<code>enable</code> or <code>disable</code> widget easily</li>
<li>automatic method chaining (if method returns no value, plugin instance is returned)</li>
</ul><h2>
<a name="building-prototype" class="anchor" href="#building-prototype"><span class="mini-icon mini-icon-link"></span></a>Building Prototype</h2>

<h3>
<a name="infrastructure" class="anchor" href="#infrastructure"><span class="mini-icon mini-icon-link"></span></a>Infrastructure</h3>

<p>minimum: </p>

<ul>
<li>
<code>options</code> used as defaults</li>
<li>
<code>_create</code> set up widget (build and inject markup, bind events, etc.,)</li>
<li>
<code>_setOption</code> respond to changes to options

<ul>
<li>jQuery UI 1.8 and below invoke <code>_setOption</code> on base widget via: <code>$.Widget.prototype._setOption.apply( this, arguments );</code>
</li>
<li>jQuery UI 1.9 and above use <code>this._super( "_setOption", key, value );</code>
</li>
</ul>
</li>
<li>
<code>destroy</code> clean up any DOM modifications caused by widget

<ul>
<li>jQuery UI 1.8 and below invoke base via <code>$.Widget.prototype.destroy.call( this );</code> </li>
<li>jQuery UI 1.9 and above define <code>_destroy</code> instead of <code>destroy</code> and not call base</li>
</ul>
</li>
</ul><h3>
<a name="private-vs-public-methods" class="anchor" href="#private-vs-public-methods"><span class="mini-icon mini-icon-link"></span></a>Private vs. Public Methods</h3>

<ul>
<li>
<code>_privateMethod</code> and <code>publicMethod</code>
</li>
<li>
<code>$('#id').('_privateMethod</code>)` throws exception</li>
</ul><h3>
<a name="instance-properties" class="anchor" href="#instance-properties"><span class="mini-icon mini-icon-link"></span></a>Instance Properties</h3>

<h4>
<a name="element" class="anchor" href="#element"><span class="mini-icon mini-icon-link"></span></a>element</h4>

<ul>
<li>element used to instantiate plugin</li>
<li>e.g., do <code>$('#id').myWidget()</code> then inside widget <code>element</code> refers to 'id' element wrapped inside $</li>
</ul><h4>
<a name="options" class="anchor" href="#options"><span class="mini-icon mini-icon-link"></span></a>options</h4>

<ul>
<li>provided by user and merged with any default options defined on <code>$.namespace.widgetname.prototype.options</code>
</li>
</ul><h4>
<a name="namespace-name" class="anchor" href="#namespace-name"><span class="mini-icon mini-icon-link"></span></a>namespace, name</h4>

<ul>
<li>as given, usually not needed</li>
</ul><h4>
<a name="widgeteventprefix" class="anchor" href="#widgeteventprefix"><span class="mini-icon mini-icon-link"></span></a>widgetEventPrefix</h4>

<ul>
<li>determines how to prefix callbacks that the plugin provides</li>
<li>defaults to widget name but can be overriden</li>
</ul><h4>
<a name="widgetbaseclass" class="anchor" href="#widgetbaseclass"><span class="mini-icon mini-icon-link"></span></a>widgetBaseClass</h4>

<ul>
<li>used to build class names to use on elements within the widget</li>
<li>usefull inside widget factory and abstract plugins</li>
</ul><h3>
<a name="extra-instance-methods-not-mentioned-in-infrastructure" class="anchor" href="#extra-instance-methods-not-mentioned-in-infrastructure"><span class="mini-icon mini-icon-link"></span></a>Extra Instance Methods (not mentioned in <em>Infrastructure</em>)</h3>

<h4>
<a name="_init" class="anchor" href="#_init"><span class="mini-icon mini-icon-link"></span></a>_init</h4>

<ul>
<li>invoked when widget is invoked with no or one option argument</li>
<li>usually called after <code>_create</code> or <code>create</code>
</li>
<li>
<code>_create</code> only called once per widget instance (unless it is destroued), <code>_init</code> each time widget is called without args</li>
<li>place default functionality here</li>
</ul><h4>
<a name="option" class="anchor" href="#option"><span class="mini-icon mini-icon-link"></span></a>option</h4>

<ul>
<li>get/set options after instantiation</li>
<li>same method signature ass <code>.css()</code> and <code>attr()</code>
</li>
<li>calls <code>_setOptions</code> internally which then calls <code>_setOption</code>
</li>
<li>should not be modified by plugin</li>
</ul><h4>
<a name="enabledisable" class="anchor" href="#enabledisable"><span class="mini-icon mini-icon-link"></span></a>enable/disable</h4>

<ul>
<li>calls <code>option('disabled', false/true)</code> thic triggers <code>_setOption</code>
</li>
</ul><h4>
<a name="_trigger" class="anchor" href="#_trigger"><span class="mini-icon mini-icon-link"></span></a>_trigger</h4>

<ul>
<li>used to execute callbacks</li>
<li><code>_trigger('eventName'[, eventObject] [, hash])</code></li>
<li>
<code>self._trigger('eventName')</code>

<ul>
<li>widget factory prepends widget's name and fires event</li>
<li>if function with 'eventName' exists inside options object, it is also triggered</li>
</ul>
</li>
</ul><h3>
<a name="inner-workings" class="anchor" href="#inner-workings"><span class="mini-icon mini-icon-link"></span></a>Inner Workings</h3>

<ul>
<li>widget instance is stored in element's data() cache e.g., <code>$('#id').data()</code>
</li>
<li>on <code>_create</code> markup is generated and injected into DOM and the original element transformed</li>
</ul></article>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/thlorenz/dox/tree-list/4b28f3159acc10f9b7e733aa5ead89787a02ed80" data-blob-url-prefix="/thlorenz/dox/blob/4b28f3159acc10f9b7e733aa5ead89787a02ed80">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1329872006" height="64" width="64">
</div>

      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Analyze web traffic</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://windows.github.com/">GitHub for Windows</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.10371s from fe3.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspaces_logo.png?1329521041" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div class="ajax-error-message">
      <p><span class="mini-icon mini-icon-exclamation"></span> Something went wrong with that request. Please try again. <a href="javascript:;" class="ajax-error-dismiss">Dismiss</a></p>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1306884374" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download"><span class="icon"></span>Download</a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1306884374" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download"><span class="icon"></span>Download</a>
        </li>
      </ul>
    </div>

    
    
    
    <span id='server_response_time' data-time='0.10626' data-host='fe3'></span>
  </body>
</html>

