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

        </div>
</div>

    <script src="js/model.js"></script>
    <script src="js/control.js"></script>
            <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    </body>
</html>




















