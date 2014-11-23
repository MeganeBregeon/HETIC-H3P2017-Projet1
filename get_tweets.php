<?php 
        include "library/twitteroauth.php";

            error_reporting(E_ALL); 
            ini_set("display_errors", 1);

            $ConsumerKey        =   "pWOG0ALEL5nhpZm6QAIC3XFIt";
            $ConsumerSecret     =   "BKFmcPv0DGX7DC6xpmktl84cx3xwiwYzgFF9VbBlFqIco3k9ie";
            $AccessToken        =   "117548673-lFyUdl8jdfLoghvwo0GznmE8AEtCk5RoNhCkkgSE";
            $AccessTokenSecret  =   "bsbYKZ2BmZ8ETlDXx5iKUv4QgNuWpm6iakWjkehf4mF7z";

            $twitter = new TwitterOAuth($ConsumerKey, $ConsumerSecret, $AccessToken, $AccessTokenSecret);
            $connection = new TwitterOAuth($ConsumerKey, $ConsumerSecret, $AccessToken, $AccessTokenSecret);
            
            if(isset($_GET['keywords'])){
                    $keywords = $_GET['keywords'];
                    //$nbTweet = $_POST['nbTweet'];
                    $result_type = $_GET['result_type'];
                    if(empty($nbTweet)){
                        $nbTweet = 100;
                }
                //$keywords='hello';
                //$result_type='recent';
                $tweets = $twitter->get("https://api.twitter.com/1.1/search/tweets.json?q=".$keywords."&result_type=".$result_type."&count=".$nbTweet);
            }

            function parseTweet($text) {
                $text = preg_replace('#http://[a-z0-9._/-]+#i', '<a  target="_blank" href="$0">$0</a>', $text); //Liens
                $text = preg_replace('#@([a-z0-9_]+)#i', '<a  target="_blank" href="http://twitter.com/$1">@$1</a>', $text); //Pseudos
                $text = preg_replace('# \#([a-z0-9_-]+)#i', ' <a target="_blank" href="http://search.twitter.com/search?q=%23$1">#$1</a>', $text); //Hashtags
                $text = preg_replace('#https://[a-z0-9._/-]+#i', '<a  target="_blank" href="$0">$0</a>', $text); //Liens
                return $text;
            }

            if(isset($_GET['keywords'])):
                //$json = json_encode ( mixed $tweet [, int $options = 0 [, int $depth = 512 ]] );
                $data=json_encode($tweets->statuses, JSON_HEX_QUOT | JSON_HEX_TAG);
                //$data = str_replace("\\/", "/", $data);

            echo $data;

            else:
            endif;
?>

        












