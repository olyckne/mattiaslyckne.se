<?php
	date_default_timezone_set("Europe/Stockholm");
	header("Content-Type: application/rss+xml; charset=UTF-8");

	$apiUrl = "http://api.mattiaslyckne.se/users/olyckne/projects";
	$baseUrl = "http://mattiaslyckne.se";

	$ch = curl_init($apiUrl);

	curl_setopt_array($ch, array(
		CURLOPT_RETURNTRANSFER => true,
	));

	$response = curl_exec($ch);
	curl_close($ch);

	$projects =  json_decode($response, true);

?>
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <atom:link href="http://mattiaslyckne.se/feed.php" rel="self" type="application/rss+xml" />
        <title>mattiaslyckne.se</title>
        <link>http://mattiaslyckne.se</link>
        <description>RSS feed of Mattias Lyckne projects</description>
        <language>en-us</language>
        <copyright>Copyright (C) 2013 mattiaslyckne.se</copyright>
<?php foreach($projects as $project):
$created = new DateTime($project['created_at']);
$updated = new DateTime($project['updated_at']);
$date = $updated > $created ? $updated : $created;
?>
        <item>
            <guid><?php echo $baseUrl; ?>/projects/<?php echo $project['id'];?></guid>
            <title><?php echo $project['title']; ?></title>
            <description><![CDATA[
                <?php echo $project['content']; ?>
					<br>
               <?php foreach($project['images'] as $image): ?>
						<a href="<?php echo $image['image'];?>">
							<img src="<?php echo $image['thumbnail'];?>">
						</a>
					<?php endforeach; ?>
            ]]></description>
            <link><?php echo $baseUrl; ?>/projects/<?php echo $project['id']; ?></link>
            <pubDate><?php echo $date->format("D, d M Y H:i:s O"); ?></pubDate>
        </item>
<?php endforeach; ?>
    </channel>
</rss>
