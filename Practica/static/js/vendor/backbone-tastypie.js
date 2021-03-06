




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>backbone-tastypie/backbone_tastypie/static/js/backbone-tastypie.js at master · PaulUithol/backbone-tastypie</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="PaulUithol/backbone-tastypie" name="twitter:title" /><meta content="backbone-tastypie - A small compatibility layer to make backbone.js and django-tastypie work together happily." name="twitter:description" /><meta content="https://2.gravatar.com/avatar/b5c0cf186026bae6da5144f24573269f?d=https%3A%2F%2Fidenticons.github.com%2F61ed5e3c2d1b216068bc64ad75aee4c4.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://2.gravatar.com/avatar/b5c0cf186026bae6da5144f24573269f?d=https%3A%2F%2Fidenticons.github.com%2F61ed5e3c2d1b216068bc64ad75aee4c4.png&amp;r=x&amp;s=400" property="og:image" /><meta content="PaulUithol/backbone-tastypie" property="og:title" /><meta content="https://github.com/PaulUithol/backbone-tastypie" property="og:url" /><meta content="backbone-tastypie - A small compatibility layer to make backbone.js and django-tastypie work together happily." property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="BD892F7F:40EA:588304:53268424" name="octolytics-dimension-request_id" /><meta content="3965731" name="octolytics-actor-id" /><meta content="CrisTowi" name="octolytics-actor-login" /><meta content="a72ffd672f69993b331a18d1e782a47b6aff8f1d0d0085cd5ba6b6f0785172ee" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="aClnsgC12XZAalcRVGf/VxwuQCikfq1J5JkhFDEzL7E=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-b29e10add48f7766bbc64a11dfc772d8f3860636.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-38408e89653ef671f9e6bc74ffaf307a3ac02571.css" media="all" rel="stylesheet" type="text/css" />
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-55976bc637c425207bc6e52d7ac4c125773713de.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-a2d1d75e0ca9e7a3074ef5f60daf8b98e3aee934.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="24da36cd9ef4013ffbb3b02a77428f32">

        <link data-pjax-transient rel='permalink' href='/PaulUithol/backbone-tastypie/blob/47a9253f0f6e885a718789b60618e83eb207578b/backbone_tastypie/static/js/backbone-tastypie.js'>

  <meta name="description" content="backbone-tastypie - A small compatibility layer to make backbone.js and django-tastypie work together happily." />

  <meta content="670670" name="octolytics-dimension-user_id" /><meta content="PaulUithol" name="octolytics-dimension-user_login" /><meta content="1825225" name="octolytics-dimension-repository_id" /><meta content="PaulUithol/backbone-tastypie" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1825225" name="octolytics-dimension-repository_network_root_id" /><meta content="PaulUithol/backbone-tastypie" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/PaulUithol/backbone-tastypie/commits/master.atom" rel="alternate" title="Recent Commits to backbone-tastypie:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <a href="#start-of-content" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="CrisTowi"
      data-repo="PaulUithol/backbone-tastypie"
      data-branch="master"
      data-sha="97e9d01caf6561c3df18869db546fee6b3657a19"
  >

    <input type="hidden" name="nwo" value="PaulUithol/backbone-tastypie" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/CrisTowi" class="name">
        <img alt="Christian" class=" js-avatar" data-user="3965731" height="20" src="https://avatars0.githubusercontent.com/u/3965731?s=140" width="20" /> CrisTowi
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="PaulUithol/backbone-tastypie">This repository</span>
    </li>
      <li>
        <a href="/PaulUithol/backbone-tastypie/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="aClnsgC12XZAalcRVGf/VxwuQCikfq1J5JkhFDEzL7E=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1825225" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/PaulUithol/backbone-tastypie/watchers">
        30
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/PaulUithol/backbone-tastypie/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" title="Unstar PaulUithol/backbone-tastypie" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/PaulUithol/backbone-tastypie/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" title="Star PaulUithol/backbone-tastypie" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/PaulUithol/backbone-tastypie/stargazers">
        497
      </a>
  </div>

  </li>


        <li>
          <a href="/PaulUithol/backbone-tastypie/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of PaulUithol/backbone-tastypie to your account" aria-label="Fork your own copy of PaulUithol/backbone-tastypie to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/PaulUithol/backbone-tastypie/network" class="social-count">89</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/PaulUithol" class="url fn" itemprop="url" rel="author"><span itemprop="title">PaulUithol</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/PaulUithol/backbone-tastypie" class="js-current-repository js-repo-home-link">backbone-tastypie</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/PaulUithol/backbone-tastypie" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /PaulUithol/backbone-tastypie">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/PaulUithol/backbone-tastypie/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /PaulUithol/backbone-tastypie/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>15</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/PaulUithol/backbone-tastypie/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /PaulUithol/backbone-tastypie/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>6</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/PaulUithol/backbone-tastypie/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /PaulUithol/backbone-tastypie/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/PaulUithol/backbone-tastypie/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /PaulUithol/backbone-tastypie/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/PaulUithol/backbone-tastypie/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /PaulUithol/backbone-tastypie/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/PaulUithol/backbone-tastypie/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /PaulUithol/backbone-tastypie/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/PaulUithol/backbone-tastypie.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/PaulUithol/backbone-tastypie.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:PaulUithol/backbone-tastypie.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:PaulUithol/backbone-tastypie.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/PaulUithol/backbone-tastypie" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/PaulUithol/backbone-tastypie" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/PaulUithol/backbone-tastypie/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download PaulUithol/backbone-tastypie as a zip file"
                   title="Download PaulUithol/backbone-tastypie as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:957eb110e46b8ef814b57b062aa18fce -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/PaulUithol/backbone-tastypie/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/PaulUithol/backbone-tastypie/blob/master/backbone_tastypie/static/js/backbone-tastypie.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/PaulUithol/backbone-tastypie/tree/0.2/backbone_tastypie/static/js/backbone-tastypie.js"
                 data-name="0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2">0.2</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/PaulUithol/backbone-tastypie" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">backbone-tastypie</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/PaulUithol/backbone-tastypie/tree/master/backbone_tastypie" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">backbone_tastypie</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/PaulUithol/backbone-tastypie/tree/master/backbone_tastypie/static" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">static</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/PaulUithol/backbone-tastypie/tree/master/backbone_tastypie/static/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">backbone-tastypie.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="backbone_tastypie/static/js/backbone-tastypie.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Paul Uithol" class="main-avatar js-avatar" data-user="670670" height="24" src="https://2.gravatar.com/avatar/b5c0cf186026bae6da5144f24573269f?d=https%3A%2F%2Fidenticons.github.com%2F61ed5e3c2d1b216068bc64ad75aee4c4.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/PaulUithol" rel="author">PaulUithol</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2013-10-26T20:45:42+02:00" title="2013-10-26 18:45:42">October 26, 2013</time>
    <div class="commit-title">
        <a href="/PaulUithol/backbone-tastypie/commit/47a9253f0f6e885a718789b60618e83eb207578b" class="message" data-pjax="true" title="Change uses of `id` to call `url()`, so url building will continue to wo...

...rk as expected when using a different idAttribute. Fixes #20">Change uses of `id` to call `url()`, so url building will continue to…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>6</strong> contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="PaulUithol" href="/PaulUithol/backbone-tastypie/commits/master/backbone_tastypie/static/js/backbone-tastypie.js?author=PaulUithol"><img alt="Paul Uithol" class=" js-avatar" data-user="670670" height="20" src="https://2.gravatar.com/avatar/b5c0cf186026bae6da5144f24573269f?d=https%3A%2F%2Fidenticons.github.com%2F61ed5e3c2d1b216068bc64ad75aee4c4.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jengdal" href="/PaulUithol/backbone-tastypie/commits/master/backbone_tastypie/static/js/backbone-tastypie.js?author=jengdal"><img alt="John Engdal" class=" js-avatar" data-user="15678" height="20" src="https://1.gravatar.com/avatar/06a00753c743fb6fa6ec42c7b5ae831a?d=https%3A%2F%2Fidenticons.github.com%2Ffc5e676f4e53d22979ffb2172a4cff7f.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="maraujop" href="/PaulUithol/backbone-tastypie/commits/master/backbone_tastypie/static/js/backbone-tastypie.js?author=maraujop"><img alt="Miguel Araujo" class=" js-avatar" data-user="252257" height="20" src="https://2.gravatar.com/avatar/1b6429aafe9e31ea3e3586e2edf80211?d=https%3A%2F%2Fidenticons.github.com%2Fa02da0d69f791c4ce912808820e00399.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jordanvg" href="/PaulUithol/backbone-tastypie/commits/master/backbone_tastypie/static/js/backbone-tastypie.js?author=jordanvg"><img alt="Jordan Jackson" class=" js-avatar" data-user="1801786" height="20" src="https://0.gravatar.com/avatar/9dd01d040ad801143bc32bb13a6ee729?d=https%3A%2F%2Fidenticons.github.com%2Ffb6b157e12d36a0fe7fcbe5aafc84d50.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="SmileyChris" href="/PaulUithol/backbone-tastypie/commits/master/backbone_tastypie/static/js/backbone-tastypie.js?author=SmileyChris"><img alt="Chris Beaven" class=" js-avatar" data-user="109951" height="20" src="https://2.gravatar.com/avatar/27c63a1bb199a1ec164e1879e33b2fb4?d=https%3A%2F%2Fidenticons.github.com%2F91b3980ff7bdbe1a775f964f2e0676d8.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="anttihirvonen" href="/PaulUithol/backbone-tastypie/commits/master/backbone_tastypie/static/js/backbone-tastypie.js?author=anttihirvonen"><img alt="Antti Hirvonen" class=" js-avatar" data-user="705066" height="20" src="https://0.gravatar.com/avatar/2da85bb7ce145b5990a1248d3e35e0e4?d=https%3A%2F%2Fidenticons.github.com%2F7a610c2f4ec3068061e04d978c8b446c.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Paul Uithol" class=" js-avatar" data-user="670670" height="24" src="https://2.gravatar.com/avatar/b5c0cf186026bae6da5144f24573269f?d=https%3A%2F%2Fidenticons.github.com%2F61ed5e3c2d1b216068bc64ad75aee4c4.png&amp;r=x&amp;s=140" width="24" />
            <a href="/PaulUithol">PaulUithol</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="John Engdal" class=" js-avatar" data-user="15678" height="24" src="https://1.gravatar.com/avatar/06a00753c743fb6fa6ec42c7b5ae831a?d=https%3A%2F%2Fidenticons.github.com%2Ffc5e676f4e53d22979ffb2172a4cff7f.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jengdal">jengdal</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Miguel Araujo" class=" js-avatar" data-user="252257" height="24" src="https://2.gravatar.com/avatar/1b6429aafe9e31ea3e3586e2edf80211?d=https%3A%2F%2Fidenticons.github.com%2Fa02da0d69f791c4ce912808820e00399.png&amp;r=x&amp;s=140" width="24" />
            <a href="/maraujop">maraujop</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jordan Jackson" class=" js-avatar" data-user="1801786" height="24" src="https://0.gravatar.com/avatar/9dd01d040ad801143bc32bb13a6ee729?d=https%3A%2F%2Fidenticons.github.com%2Ffb6b157e12d36a0fe7fcbe5aafc84d50.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jordanvg">jordanvg</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Chris Beaven" class=" js-avatar" data-user="109951" height="24" src="https://2.gravatar.com/avatar/27c63a1bb199a1ec164e1879e33b2fb4?d=https%3A%2F%2Fidenticons.github.com%2F91b3980ff7bdbe1a775f964f2e0676d8.png&amp;r=x&amp;s=140" width="24" />
            <a href="/SmileyChris">SmileyChris</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Antti Hirvonen" class=" js-avatar" data-user="705066" height="24" src="https://0.gravatar.com/avatar/2da85bb7ce145b5990a1248d3e35e0e4?d=https%3A%2F%2Fidenticons.github.com%2F7a610c2f4ec3068061e04d978c8b446c.png&amp;r=x&amp;s=140" width="24" />
            <a href="/anttihirvonen">anttihirvonen</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>167 lines (140 sloc)</span>
          <span class="meta-divider"></span>
        <span>5.518 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/PaulUithol/backbone-tastypie/edit/master/backbone_tastypie/static/js/backbone-tastypie.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/PaulUithol/backbone-tastypie/raw/master/backbone_tastypie/static/js/backbone-tastypie.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/PaulUithol/backbone-tastypie/blame/master/backbone_tastypie/static/js/backbone-tastypie.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/PaulUithol/backbone-tastypie/commits/master/backbone_tastypie/static/js/backbone-tastypie.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/PaulUithol/backbone-tastypie/delete/master/backbone_tastypie/static/js/backbone-tastypie.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * Backbone-tastypie.js 0.2</span></div><div class='line' id='LC3'><span class="cm"> * (c) 2011 Paul Uithol</span></div><div class='line' id='LC4'><span class="cm"> * </span></div><div class='line' id='LC5'><span class="cm"> * Backbone-tastypie may be freely distributed under the MIT license.</span></div><div class='line' id='LC6'><span class="cm"> * Add or override Backbone.js functionality, for compatibility with django-tastypie.</span></div><div class='line' id='LC7'><span class="cm"> * Depends on Backbone (and thus on Underscore as well): https://github.com/documentcloud/backbone.</span></div><div class='line' id='LC8'><span class="cm"> */</span></div><div class='line' id='LC9'><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC10'>	<span class="s2">&quot;use strict&quot;</span><span class="p">;</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'>	<span class="c1">// Backbone and underscore noConflict support. Save local reference to _ and Backbone objects.</span></div><div class='line' id='LC13'>	<span class="kd">var</span> <span class="nx">_</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">;</span></div><div class='line' id='LC14'>	<span class="c1">// CommonJS shim</span></div><div class='line' id='LC15'>	<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nb">window</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC16'>		<span class="nx">_</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span> <span class="s1">&#39;underscore&#39;</span> <span class="p">);</span></div><div class='line' id='LC17'>		<span class="nx">Backbone</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span> <span class="s1">&#39;backbone&#39;</span> <span class="p">);</span></div><div class='line' id='LC18'>	<span class="p">}</span></div><div class='line' id='LC19'>	<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC20'>		<span class="nx">_</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC21'>		<span class="nx">Backbone</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Backbone</span><span class="p">;</span></div><div class='line' id='LC22'>	<span class="p">}</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Tastypie</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC25'>		<span class="nx">doGetOnEmptyPostResponse</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC26'>		<span class="nx">doGetOnEmptyPutResponse</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC27'>		<span class="nx">apiKey</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC28'>			<span class="nx">username</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC29'>			<span class="nx">key</span><span class="o">:</span> <span class="s1">&#39;&#39;</span></div><div class='line' id='LC30'>		<span class="p">},</span></div><div class='line' id='LC31'>		<span class="nx">csrfToken</span><span class="o">:</span> <span class="s1">&#39;&#39;</span></div><div class='line' id='LC32'>	<span class="p">};</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>	<span class="cm">/**</span></div><div class='line' id='LC35'><span class="cm">	 * Override Backbone&#39;s sync function, to do a GET upon receiving a HTTP CREATED.</span></div><div class='line' id='LC36'><span class="cm">	 * This requires 2 requests to do a create, so you may want to use some other method in production.</span></div><div class='line' id='LC37'><span class="cm">	 * Modified from http://joshbohde.com/blog/backbonejs-and-django</span></div><div class='line' id='LC38'><span class="cm">	 */</span></div><div class='line' id='LC39'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">oldSync</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">sync</span><span class="p">;</span></div><div class='line' id='LC40'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">sync</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC41'>		<span class="kd">var</span> <span class="nx">headers</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Tastypie</span><span class="p">.</span><span class="nx">apiKey</span> <span class="o">&amp;&amp;</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Tastypie</span><span class="p">.</span><span class="nx">apiKey</span><span class="p">.</span><span class="nx">username</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC44'>			<span class="nx">headers</span><span class="p">[</span> <span class="s1">&#39;Authorization&#39;</span> <span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;ApiKey &#39;</span> <span class="o">+</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Tastypie</span><span class="p">.</span><span class="nx">apiKey</span><span class="p">.</span><span class="nx">username</span> <span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Tastypie</span><span class="p">.</span><span class="nx">apiKey</span><span class="p">.</span><span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC45'>		<span class="p">}</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Tastypie</span><span class="p">.</span><span class="nx">csrfToken</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>			<span class="nx">headers</span><span class="p">[</span> <span class="s1">&#39;X-CSRFToken&#39;</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Tastypie</span><span class="p">.</span><span class="nx">csrfToken</span><span class="p">;</span></div><div class='line' id='LC49'>		<span class="p">}</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>		<span class="c1">// Keep `headers` for a potential second request</span></div><div class='line' id='LC52'>		<span class="nx">headers</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="nx">headers</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span> <span class="p">);</span></div><div class='line' id='LC53'>		<span class="nx">options</span><span class="p">.</span><span class="nx">headers</span> <span class="o">=</span> <span class="nx">headers</span><span class="p">;</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>		<span class="k">if</span> <span class="p">(</span> <span class="p">(</span> <span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;create&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Tastypie</span><span class="p">.</span><span class="nx">doGetOnEmptyPostResponse</span> <span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC56'>			<span class="p">(</span> <span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;update&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Tastypie</span><span class="p">.</span><span class="nx">doGetOnEmptyPutResponse</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC57'>			<span class="kd">var</span> <span class="nx">dfd</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">();</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>			<span class="c1">// Set up &#39;success&#39; handling</span></div><div class='line' id='LC60'>			<span class="kd">var</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">;</span></div><div class='line' id='LC61'>			<span class="nx">dfd</span><span class="p">.</span><span class="nx">done</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">textStatus</span><span class="p">,</span> <span class="nx">xhr</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'>				<span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="nx">success</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">success</span><span class="p">(</span> <span class="nx">resp</span> <span class="p">);</span></div><div class='line' id='LC63'>			<span class="p">});</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>			<span class="nx">options</span><span class="p">.</span><span class="nx">success</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">textStatus</span><span class="p">,</span> <span class="nx">xhr</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC66'>				<span class="c1">// If create is successful but doesn&#39;t return a response, fire an extra GET.</span></div><div class='line' id='LC67'>				<span class="c1">// Otherwise, resolve the deferred (which triggers the original &#39;success&#39; callbacks).</span></div><div class='line' id='LC68'>				<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">resp</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">status</span> <span class="o">===</span> <span class="mi">201</span> <span class="o">||</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">status</span> <span class="o">===</span> <span class="mi">202</span> <span class="o">||</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">status</span> <span class="o">===</span> <span class="mi">204</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span> <span class="c1">// 201 CREATED, 202 ACCEPTED or 204 NO CONTENT; response null or empty.</span></div><div class='line' id='LC69'>					<span class="kd">var</span> <span class="nx">location</span> <span class="o">=</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">getResponseHeader</span><span class="p">(</span> <span class="s1">&#39;Location&#39;</span> <span class="p">)</span> <span class="o">||</span> <span class="nx">model</span><span class="p">.</span><span class="nx">url</span><span class="p">();</span></div><div class='line' id='LC70'>					<span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC71'>						<span class="nx">url</span><span class="o">:</span> <span class="nx">location</span><span class="p">,</span></div><div class='line' id='LC72'>						<span class="nx">headers</span><span class="o">:</span> <span class="nx">headers</span><span class="p">,</span></div><div class='line' id='LC73'>						<span class="nx">success</span><span class="o">:</span> <span class="nx">dfd</span><span class="p">.</span><span class="nx">resolve</span><span class="p">,</span></div><div class='line' id='LC74'>						<span class="nx">error</span><span class="o">:</span> <span class="nx">dfd</span><span class="p">.</span><span class="nx">reject</span></div><div class='line' id='LC75'>					<span class="p">});</span></div><div class='line' id='LC76'>				<span class="p">}</span></div><div class='line' id='LC77'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC78'>					<span class="k">return</span> <span class="nx">dfd</span><span class="p">.</span><span class="nx">resolveWith</span><span class="p">(</span> <span class="nx">options</span><span class="p">.</span><span class="nx">context</span> <span class="o">||</span> <span class="nx">options</span><span class="p">,</span> <span class="p">[</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">textStatus</span><span class="p">,</span> <span class="nx">xhr</span> <span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC79'>				<span class="p">}</span></div><div class='line' id='LC80'>			<span class="p">};</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>			<span class="c1">// Set up &#39;error&#39; handling</span></div><div class='line' id='LC83'>			<span class="kd">var</span> <span class="nx">error</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">;</span></div><div class='line' id='LC84'>			<span class="nx">dfd</span><span class="p">.</span><span class="nx">fail</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">xhr</span><span class="p">,</span> <span class="nx">textStatus</span><span class="p">,</span> <span class="nx">errorThrown</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC85'>				<span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="nx">error</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">error</span><span class="p">(</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">responseText</span> <span class="p">);</span></div><div class='line' id='LC86'>			<span class="p">});</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>			<span class="nx">options</span><span class="p">.</span><span class="nx">error</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">xhr</span><span class="p">,</span> <span class="nx">textStatus</span><span class="p">,</span> <span class="nx">errorText</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC89'>				<span class="nx">dfd</span><span class="p">.</span><span class="nx">rejectWith</span><span class="p">(</span> <span class="nx">options</span><span class="p">.</span><span class="nx">context</span> <span class="o">||</span> <span class="nx">options</span><span class="p">,</span> <span class="p">[</span> <span class="nx">xhr</span><span class="p">,</span> <span class="nx">textStatus</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">responseText</span> <span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC90'>			<span class="p">};</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>			<span class="c1">// Create the request, and make it accessibly by assigning it to the &#39;request&#39; property on the deferred</span></div><div class='line' id='LC93'>			<span class="nx">dfd</span><span class="p">.</span><span class="nx">request</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">oldSync</span><span class="p">(</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC94'>			<span class="k">return</span> <span class="nx">dfd</span><span class="p">;</span></div><div class='line' id='LC95'>		<span class="p">}</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>		<span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">oldSync</span><span class="p">(</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></div><div class='line' id='LC98'>	<span class="p">};</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">idAttribute</span> <span class="o">=</span> <span class="s1">&#39;resource_uri&#39;</span><span class="p">;</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC103'>		<span class="c1">// Use the &#39;resource_uri&#39; if possible</span></div><div class='line' id='LC104'>		<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span> <span class="s1">&#39;resource_uri&#39;</span> <span class="p">);</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'>		<span class="c1">// If there&#39;s no idAttribute, use the &#39;urlRoot&#39;. Fallback to try to have the collection construct a url.</span></div><div class='line' id='LC107'>		<span class="c1">// Explicitly add the &#39;id&#39; attribute if the model has one.</span></div><div class='line' id='LC108'>		<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">url</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC109'>			<span class="nx">url</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlRoot</span> <span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlRoot</span><span class="p">()</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlRoot</span><span class="p">;</span></div><div class='line' id='LC110'>			<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">collection</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">url</span> <span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">url</span><span class="p">()</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">url</span> <span class="p">);</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">url</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span> <span class="s1">&#39;id&#39;</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC113'>				<span class="nx">url</span> <span class="o">=</span> <span class="nx">addSlash</span><span class="p">(</span> <span class="nx">url</span> <span class="p">)</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span> <span class="s1">&#39;id&#39;</span> <span class="p">);</span></div><div class='line' id='LC114'>			<span class="p">}</span></div><div class='line' id='LC115'>		<span class="p">}</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>		<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span> <span class="o">&amp;&amp;</span> <span class="nx">addSlash</span><span class="p">(</span> <span class="nx">url</span> <span class="p">);</span></div><div class='line' id='LC118'><br/></div><div class='line' id='LC119'>		<span class="k">return</span> <span class="nx">url</span> <span class="o">||</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC120'>	<span class="p">};</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>	<span class="cm">/**</span></div><div class='line' id='LC123'><span class="cm">	 * Return the first entry in &#39;data.objects&#39; if it exists and is an array, or else just plain &#39;data&#39;.</span></div><div class='line' id='LC124'><span class="cm">	 */</span></div><div class='line' id='LC125'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Model</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC126'>		<span class="k">return</span> <span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">objects</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span> <span class="nx">data</span><span class="p">.</span><span class="nx">objects</span> <span class="p">)</span> <span class="o">?</span> <span class="nx">data</span><span class="p">.</span><span class="nx">objects</span><span class="p">[</span> <span class="mi">0</span> <span class="p">]</span> <span class="o">:</span> <span class="nx">data</span><span class="p">.</span><span class="nx">objects</span> <span class="p">)</span> <span class="o">||</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC127'>	<span class="p">};</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>	<span class="cm">/**</span></div><div class='line' id='LC130'><span class="cm">	 * Return &#39;data.objects&#39; if it exists.</span></div><div class='line' id='LC131'><span class="cm">	 * If present, the &#39;data.meta&#39; object is assigned to the &#39;collection.meta&#39; var.</span></div><div class='line' id='LC132'><span class="cm">	 */</span></div><div class='line' id='LC133'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC134'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">meta</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC135'>			<span class="k">this</span><span class="p">.</span><span class="nx">meta</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">meta</span><span class="p">;</span></div><div class='line' id='LC136'>		<span class="p">}</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>		<span class="k">return</span> <span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">objects</span> <span class="o">||</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC139'>	<span class="p">};</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>	<span class="nx">Backbone</span><span class="p">.</span><span class="nx">Collection</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">models</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC142'>		<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlRoot</span> <span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlRoot</span><span class="p">()</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlRoot</span><span class="p">;</span></div><div class='line' id='LC143'>		<span class="c1">// If the collection doesn&#39;t specify an url, try to obtain one from a model in the collection</span></div><div class='line' id='LC144'>		<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">url</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC145'>			<span class="kd">var</span> <span class="nx">model</span> <span class="o">=</span> <span class="nx">models</span> <span class="o">&amp;&amp;</span> <span class="nx">models</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">models</span><span class="p">[</span> <span class="mi">0</span> <span class="p">];</span></div><div class='line' id='LC146'>			<span class="nx">url</span> <span class="o">=</span> <span class="nx">model</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="nx">model</span><span class="p">.</span><span class="nx">urlRoot</span> <span class="p">)</span> <span class="o">?</span> <span class="nx">model</span><span class="p">.</span><span class="nx">urlRoot</span><span class="p">()</span> <span class="o">:</span> <span class="nx">model</span><span class="p">.</span><span class="nx">urlRoot</span> <span class="p">);</span></div><div class='line' id='LC147'>		<span class="p">}</span></div><div class='line' id='LC148'>		<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span> <span class="o">&amp;&amp;</span> <span class="nx">addSlash</span><span class="p">(</span> <span class="nx">url</span> <span class="p">);</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>		<span class="c1">// Build a url to retrieve a set of models. This assume the last part of each model&#39;s idAttribute</span></div><div class='line' id='LC151'>		<span class="c1">// (set to &#39;resource_uri&#39;) contains the model&#39;s id.</span></div><div class='line' id='LC152'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">models</span> <span class="o">&amp;&amp;</span> <span class="nx">models</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC153'>			<span class="kd">var</span> <span class="nx">ids</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span> <span class="nx">models</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">model</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC154'>				<span class="kd">var</span> <span class="nx">parts</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">compact</span><span class="p">(</span> <span class="nx">model</span><span class="p">.</span><span class="nx">url</span><span class="p">().</span><span class="nx">split</span><span class="p">(</span> <span class="s1">&#39;/&#39;</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC155'>				<span class="k">return</span> <span class="nx">parts</span><span class="p">[</span> <span class="nx">parts</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span> <span class="p">];</span></div><div class='line' id='LC156'>			<span class="p">});</span></div><div class='line' id='LC157'>			<span class="nx">url</span> <span class="o">+=</span> <span class="s1">&#39;set/&#39;</span> <span class="o">+</span> <span class="nx">ids</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span> <span class="s1">&#39;;&#39;</span> <span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span><span class="p">;</span></div><div class='line' id='LC158'>		<span class="p">}</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>		<span class="k">return</span> <span class="nx">url</span> <span class="o">||</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC161'>	<span class="p">};</span></div><div class='line' id='LC162'><br/></div><div class='line' id='LC163'>	<span class="kd">var</span> <span class="nx">addSlash</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">str</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC164'>		<span class="k">return</span> <span class="nx">str</span> <span class="o">+</span> <span class="p">(</span> <span class="p">(</span> <span class="nx">str</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">str</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span> <span class="nx">str</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span> <span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;/&#39;</span> <span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="s1">&#39;/&#39;</span> <span class="p">);</span></div><div class='line' id='LC165'>	<span class="p">};</span></div><div class='line' id='LC166'><span class="p">})();</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.10176s from github-fe131-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

