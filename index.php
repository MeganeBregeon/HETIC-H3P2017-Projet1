<?php include "library/twitteroauth.php"; ?>

<?php
error_reporting(E_ALL); 
ini_set("display_errors", 1);

    $ConsumerKey        =   "pWOG0ALEL5nhpZm6QAIC3XFIt";
    $ConsumerSecret     =   "BKFmcPv0DGX7DC6xpmktl84cx3xwiwYzgFF9VbBlFqIco3k9ie";
    $AccessToken        =   "117548673-lFyUdl8jdfLoghvwo0GznmE8AEtCk5RoNhCkkgSE";
    $AccessTokenSecret  =   "bsbYKZ2BmZ8ETlDXx5iKUv4QgNuWpm6iakWjkehf4mF7z";

    $twitter = new TwitterOAuth($ConsumerKey, $ConsumerSecret, $AccessToken, $AccessTokenSecret);
    $connection = new TwitterOAuth($ConsumerKey, $ConsumerSecret, $AccessToken, $AccessTokenSecret);
    
    if(isset($_POST['keywords'])){
        $keywords = $_POST['keywords'];
        //$nbTweet = $_POST['nbTweet'];
        $result_type = $_POST['result_type'];

        if(empty($nbTweet)){
            $nbTweet = 1;
        }

        $tweets = $twitter->get("https://api.twitter.com/1.1/search/tweets.json?q=".$keywords."&result_type=".$result_type."&count=".$nbTweet);
    }

?>

<!doctype html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <title>API twitter test</title>
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootswatch/3.2.0/readable/bootstrap.min.css">
</head>

<body><br/>
    <h1 style="text-align :center;">Paris Fashion Week</h1>

<div id="search"><br/>
    <div class="container">  
        <div class="row">    
            <div class="col-xs-8 col-xs-offset-2">
                <div class="input-group">
                    <div class="input-group-btn search-panel">
                        <form action="" method="post">
                <!--            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                <span id="search_concept">Filter by</span> <span class="caret"></span>
                            </button>
                -->
                            <select name="result_type" class="btn btn-default dropdown-toggle data-toggle=" type="button">
                                <option value="popular">Popular</option>
                                <option value="recent">Recent</option>
                                <option value="mixed">Mixed</option>
                            </select>
                    </div>
                            <input type="text" class="form-control" name="keywords" placeholder="Enter your keywords...">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="submit"><span class="glyphicon glyphicon-search"></span></button>
                            </span>
                        </form>
                </div>
            </div>
        </div>
    </div>
</div>


        

 <!--           <form action="" method="post">
                <label>Mots-clés* : </label><input type="text" name="keywords" /><br />
                <label>Nombre de tweets : </label><input type="text" name="nbTweet" /><br />
                <input type="submit" name="OK" />
            </form>
-->
    <?php
function parseTweet($text) {
    $text = preg_replace('#http://[a-z0-9._/-]+#i', '<a  target="_blank" href="$0">$0</a>', $text); //Liens
    $text = preg_replace('#@([a-z0-9_]+)#i', '<a  target="_blank" href="http://twitter.com/$1">@$1</a>', $text); //Pseudos
    $text = preg_replace('# \#([a-z0-9_-]+)#i', ' <a target="_blank" href="http://search.twitter.com/search?q=%23$1">#$1</a>', $text); //Hashtags
    $text = preg_replace('#https://[a-z0-9._/-]+#i', '<a  target="_blank" href="$0">$0</a>', $text); //Liens
    return $text;
}
?>
<div id="results">
            <hr>
            <?php
                if(isset($_POST['keywords'])):
                foreach($tweets->statuses as $tweet):
                //$json = json_encode ( mixed $tweet [, int $options = 0 [, int $depth = 512 ]] );
                $data=json_encode($tweet, JSON_HEX_QUOT | JSON_HEX_TAG);
                $data = str_replace("\\/", "/", $data);
                echo $data;
            ?>

   <!--  <div style="height:550px;" class="col-sm-2 col-md-2">
     <div class="thumbnail">
        

            <p class="tweet">
                    <div>
                        <img src="<?php echo $tweet->entities->media[0]->media_url; ?>" width="100%" height="auto"/>
                    </div>
            <div class="caption">       
                    <img src="<?php echo $tweet->user->profile_image_url; ?>" alt="user picture" />
                    <?php echo'<a target="_blank" href="http://twitter.com/',$tweet->user->screen_name, '">', $tweet->user->name,'</a> @', $tweet->user->screen_name ;?>
                </span>
                <br/>
                <span>
                    <?php echo parseTweet($tweet->text); ?>
                </span>
                <br/>
                <span>
                    Retweets: <?php echo $tweet->retweet_count; ?>
                    Favorites: <?php echo $tweet->favorite_count; ?> <br/>
                    Date : <?php echo $tweet->created_at; ?>
                    Source : <?php echo $tweet->created_at; ?>
                    <br/>
                    <?php 
                        $status = $connection->post('statuses/retweet/524861550696603648');
                        print_r($status);
                    ?>
            </p>

        </div>
      </div>



</div>

             -->
            <?php
                endforeach;
                else:
            ?>
            <p>Veuillez remplir le formulaire</p>
            <?php
                endif;
            ?>
        </div>
</div>
            <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    </body>
</html>

</html>




















