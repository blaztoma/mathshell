<?php
	$_taskTitle = "";
	$_shortTitle = "";
	$_taskAuthor = "";
	$_taskId = "";
	$_shortTitle = "";

	function make_seed()
	{
   		list($usec, $sec) = explode(' ', microtime());
   		return (float) $sec + ((float) $usec * 100000);
	}

	function sanitizeInput($str) {
        $allowedElements = [
            'p',
            'br',
            'b',
            'strong',
            'i',
            'em',
            's',
            'u',
            'ul',
            'ol',
            'li',
            'span',
            'table',
            'tbody',
            'tr',
            'td'
        ];
        return strip_tags($str, $allowedElements);
	}

	function uploadArchive( $post )
	{
		global $_taskTitle;
		global $_shortTitle;
		global $_taskAuthor;
		global $_taskId;
		global $_shortTitle;
		global $_numQuestions;
		global $_taskTiming;
		global $_taskMusic;
		global $_duration;
		global $_bonus;
		global $_fine;
		global $_fine;
		global $_operation;
		global $_from1;
		global $_to1;
		global $_from2;
		global $_to2;
		global $_minval;
		global $_maxval;

		if($_FILES['zip_file']['name'] != '')  
		{  
			$file_name = $_FILES['zip_file']['name'];  
			$array = explode(".", $file_name);  
			$name = $array[0];  
			$ext = $array[1];  
			if($ext == 'zip')  
			{  	   		
		   		$zip = new ZipArchive;
				$zip->open($_FILES['zip_file']['tmp_name']);
				$taskData = $zip->getFromName('game.xml');
				$taskObject = new SimpleXMLElement($taskData);
				$_taskTitle = sanitizeInput($taskObject->title);
				$_taskId = sanitizeInput($taskObject["id"]);
				$_taskAuthor = sanitizeInput($taskObject->author);
				$_shortTitle = sanitizeInput($taskObject->short);
				$_numQuestions = sanitizeInput($taskObject->numquestions);
				$_taskTiming = sanitizeInput($taskObject->timed);
				$_taskMusic = sanitizeInput($taskObject->music);
				$_duration = sanitizeInput($taskObject->duration);
				$_bonus = sanitizeInput($taskObject->bonus);
				$_fine = sanitizeInput($taskObject->fine);
				$_fine = sanitizeInput($taskObject->fine);
				$_operation = sanitizeInput($taskObject->operation);
				$_from1 = sanitizeInput($taskObject->from1);
				$_to1 = sanitizeInput($taskObject->to1);
				$_from2 = sanitizeInput($taskObject->from2);
				$_to2 = sanitizeInput($taskObject->to2);
				$_minval = sanitizeInput($taskObject->minvalue);
				$_maxval = sanitizeInput($taskObject->maxvalue);
			}  
		} 		
	}

	function writeImsManifest( $post )
	{
		$fileContents = file_get_contents("repfiles/imsmanifest.xml");
		$newcontents=str_replace("{{TASK_ID}}", $post["t_id"], $fileContents);
		$newcontents=str_replace("{{TITLE}}", $post["t_title"], $newcontents);
		$fileName = "shells/imsmanifest.xml";
		$fd = fopen ($fileName, "w");
		$out = fwrite ($fd, $newcontents);
		fclose ($fd);		
	}

	function writeTask( $post )
	{
		$fileContents = file_get_contents("repfiles/game.xml");
		$newcontents=str_replace("{{TITLE}}", $post["t_title"], $fileContents);
		$newcontents=str_replace("{{TASK_ID}}", $post["t_id"], $newcontents);
		$newcontents=str_replace("{{SHORT_TITLE}}", $post["s_title"], $newcontents);	
		$newcontents=str_replace("{{AUTHOR}}", $post["t_author"], $newcontents);	
		$newcontents=str_replace("{{TIMED}}", $post["t_timing"] == "on" ? 1 : 0, $newcontents);
		$newcontents=str_replace("{{MUSIC}}", $post["t_music"] == "on" ? 1 : 0, $newcontents);
		$newcontents=str_replace("{{DURATION}}", $post["t_duration"] ? $post["t_duration"] : 0, $newcontents);
		$newcontents=str_replace("{{BONUS}}", $post["t_bonus"] ? $post["t_bonus"] : 0, $newcontents);
		$newcontents=str_replace("{{FINE}}", $post["t_fine"] ? $post["t_fine"] : 0, $newcontents);
		$newcontents=str_replace("{{OPERATION}}", $post["t_operation"], $newcontents);
		$newcontents=str_replace("{{FROM_1}}", $post["t_from1"], $newcontents);	
		$newcontents=str_replace("{{FROM_2}}", $post["t_from2"], $newcontents);	
		$newcontents=str_replace("{{TO_1}}", $post["t_to1"], $newcontents);	
		$newcontents=str_replace("{{TO_2}}", $post["t_to2"], $newcontents);	
		$newcontents=str_replace("{{MIN_ANSWER}}", $post["t_minval"], $newcontents);	
		$newcontents=str_replace("{{MAX_ANSWER}}", $post["t_maxval"], $newcontents);	
		$newcontents=str_replace("{{NUM_QUESTIONS}}", $post["t_numquestions"], $newcontents);	

		$fileName = "shells/game.xml";
		$fd = fopen ($fileName, "w");
		$out = fwrite ($fd, $newcontents);
		fclose ($fd);
	}

	function writeIndex( $post )
	{
		$fileContents = file_get_contents("repfiles/index.html");
		$newcontents=str_replace("{{TITLE}}", $post["t_title"], $fileContents);
		$fileName = "shells/inhtml.html";
		$fd = fopen ($fileName, "w");
		$out = fwrite ($fd, $newcontents);
		fclose ($fd);
	}	

	function writeIndexLMS( $post )
	{
		$fileContents = file_get_contents("repfiles/index_lms.html");
		$newcontents=str_replace("{{TITLE}}", $post["t_title"], $fileContents);
		$fileName = "shells/index_lms.html";
		$fd = fopen ($fileName, "w");
		$out = fwrite ($fd, $newcontents);
		fclose ($fd);
	}

	function writeStory( $post )
	{
		$fileContents = file_get_contents("repfiles/story.html");
		$newcontents=str_replace("{{TITLE}}", $post["t_title"], $fileContents);
		$fileName = "shells/story.html";
		$fd = fopen ($fileName, "w");
		$out = fwrite ($fd, $newcontents);
		fclose ($fd);	
	}

	function writeManifest( $post )
	{
		$fileContents = file_get_contents("repfiles/manifest.json");
		$newcontents=str_replace("{{TITLE}}", $post["t_title"], $fileContents);
		$newcontents=str_replace("{{SHORT_TITLE}}", $post["s_title"], $newcontents);
		$fileName = "shells/manifest.json";
		$fd = fopen ($fileName, "w");
		$out = fwrite ($fd, $newcontents);
		fclose ($fd);
	}

	function makeWeb( $post )
	{
		global $_taskTitle;
		global $_taskLink;
		global $_taskFrameCode;

		mt_srand(make_seed());
        $rseed=mt_rand(1,999);
		copy("template.zip","shells/scormpackage".$rseed.".zip");

		writeImsManifest( $post );
		writeTask( $post );
		writeIndex( $post );
		writeIndexLMS( $post );
		writeStory( $post );
		writeManifest( $post );

		$zip = new ZipArchive;
		if ($zip->open("shells/scormpackage".$rseed.".zip") === TRUE) {
		    $zip->addFile('shells/imsmanifest.xml', 'imsmanifest.xml');
		    $zip->addFile('shells/game.xml', 'game.xml');
		    $zip->addFile('shells/inhtml.html', 'index.html');
		    $zip->addFile('shells/index_lms.html', 'index_lms.html');
		    $zip->addFile('shells/story.html', 'story.html');
		    $zip->addFile('shells/manifest.json', 'manifest.json');
		    $zip->close();
		} else {
		}

		$_taskFolder = "public/" . uniqid();
		// $_taskLink = "https://arzinai.lt/scorm/" . $_taskFolder;
		$_taskLink = "http://localhost/mathshell/" . $_taskFolder;
		$zip = new ZipArchive;
		if ($zip->open("shells/scormpackage".$rseed.".zip") === TRUE) {
			$zip->extractTo($_taskFolder);
		}

		$phptempl = "<iframe src=\"" . $_taskLink . "\" width=\"100%\" height=\"1000\" frameborder=\"0\" allow=\"fullscreen\" title=\"" . $post["t_title"] . "\"></iframe>";

		$_taskTitle = $post["t_title"];
		$_taskFrameCode = $phptempl;
	}
     
	function sendArchive( $post )
	{
		mt_srand(make_seed());
        $rseed=mt_rand(1,999);
		copy("template.zip","shells/scormpackage".$rseed.".zip");

		writeImsManifest( $post );
		writeTask( $post );
		writeIndex( $post );
		writeIndexLMS( $post );
		writeStory( $post );
		writeManifest( $post );

		$zip = new ZipArchive;
		if ($zip->open("shells/scormpackage".$rseed.".zip") === TRUE) {
		    $zip->addFile('shells/imsmanifest.xml', 'imsmanifest.xml');
		    $zip->addFile('shells/game.xml', 'game.xml');
		    $zip->addFile('shells/inhtml.html', 'index.html');
		    $zip->addFile('shells/index_lms.html', 'index_lms.html');
		    $zip->addFile('shells/story.html', 'story.html');
		    $zip->addFile('shells/manifest.json', 'manifest.json');
		    $zip->close();
		} else {
		}

		ob_end_clean();
  		header("Content-type: application/zip"); 
		header("Content-disposition: attachment; filename=scorm_pckg.zip");
        header("Content-Transfer-Encoding: binary");
        header("Content-Length: ".filesize("shells/scormpackage".$rseed.".zip"));
		readfile("shells/scormpackage".$rseed.".zip");  		
	}

	$vars=$_REQUEST;
	$rezult="No operation selected";
	if( isset( $vars['mod'] ) && $vars['mod'] == 'makescorm' ) {
		sendArchive($_POST);
	} else if (isset( $vars['mod'] ) && $vars['mod'] == 'makeweb') {
		makeWeb($_POST);
		include_once("web.php");		
	} else if (isset( $vars['mod'] ) && $vars['mod'] == 'uploadscorm') {
		uploadArchive($_POST);
		include_once("html.php");
	} else {
		include_once("html.php");
	}

?>