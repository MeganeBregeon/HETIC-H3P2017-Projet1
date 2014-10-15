<?php include "library/twitteroauth.php"; ?>

<?php
error_reporting(E_ALL); 
ini_set("display_errors", 1);

    $ConsumerKey        =   "bKvM2m7e9V01mcCxKXOxJ20Ry";
    $ConsumerSecret     =   "kUN7STLKULZIwDLpGpZDwGZb9LrR8u5cVs37JtoSe6YgmXlquY";
    $AccessToken        =   "117548673-emcSS7yP8eX58c5kPCrvl3HYdtRBIMljrkyZrGuH";
    $AccessTokenSecret  =   "uQ4OYy6yTdLImIdm02mjGHVLbnCeWL1Qkfdyc8GctUrgM";

    $twitter = new TwitterOAuth($ConsumerKey, $ConsumerSecret, $AccessToken, $AccessTokenSecret);
    
    if(isset($_POST['keywords'])){
        $keywords = $_POST['keywords'];
        //$nbTweet = $_POST['nbTweet'];
        $result_type = $_POST['result_type'];

        if(empty($nbTweet)){
            $nbTweet = 18;
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

            <hr>
            <?php
                if(isset($_POST['keywords'])):
                foreach($tweets->statuses as $tweet):
            ?>


    <div style="height:250px;" class="col-sm-4 col-md-4">
     <div class="thumbnail">
        <div class="caption">

            <p class="tweet">
                   
                    <img src="<?php echo $tweet->user->profile_image_url; ?>" alt="user picture" />
                    <?php echo $tweet->user->name, ' @', $tweet->user->screen_name ;?>
                </span>
                <br/>
                <span>
                    <?php echo $tweet->text; ?>
                </span>
                <br/>
                <span>
                    Retweets: <?php echo $tweet->retweet_count; ?>
                    Favorites: <?php echo $tweet->favorite_count; ?> <br/>
                    Date : <?php echo $tweet->created_at; ?>
                
            </p>

        </div>
      </div>



</div>
            
            <?php
                endforeach;
                else:
            ?>
            <p>Veuillez remplir le formulaire</p>
            <?php
                endif;
            ?>
        </div>

            <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    </body>
</html>

</html>




















