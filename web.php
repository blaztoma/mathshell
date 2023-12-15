<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<!--favicon-->
	<link rel="icon" href="assets/images/favicon-32x32.png" type="image/png" />
	<!--plugins-->
	<link href="assets/plugins/simplebar/css/simplebar.css" rel="stylesheet" />
	<link href="assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet" />
	<link href="assets/plugins/metismenu/css/metisMenu.min.css" rel="stylesheet" />
	<!-- loader-->
	<link href="assets/css/pace.min.css" rel="stylesheet" />
	<script src="assets/js/pace.min.js"></script>
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="assets/css/bootstrap.min.css" />
	<!-- Icons CSS -->
	<link rel="stylesheet" href="assets/css/icons.css" />
	<!-- App CSS -->
	<link rel="stylesheet" href="assets/css/app.css" />
</head>
<body class="bg-theme bg-theme1">
	<div class="wrapper">
		<div class="card radius-15">
			<div id="copyInfo" style="display: none;" class="alert alert-success alert-dismissible fade hide" role="alert">Informacija nukopijuota sėkmingai!
				<button type="button" class="close" aria-label="Close" onclick="hideAlert();">	<span aria-hidden="true">×</span>
				</button>
			</div>				
			<div class="card-body">
				<div class="card-title">
					<h4 class="mb-0" style="float: left;">Publikavimo informacija</h4>
				</div>

				<hr style="margin-top: 4rem;clear: both;" />

				<div class="form-group">
					<label>Užduoties pavadinimas</label>
					<div class="input-group">
						<div class="input-group-prepend">	
							<span class="input-group-text"><i class='bx bx-text'></i></span>
						</div>
						<input type="text" id="t_title" name="t_title" class="form-control border-left-0" value="<?=$_taskTitle?>" >
						<div class="input-group-append">	
							<span class="input-group-text" style="cursor: pointer;" onclick="copyInfo('t_title');"><i class='bx bx-copy'></i></span>
						</div>
					</div>
				</div>

				<div class="form-group">
					<label>Publikavimo nuoroda</label>
					<div class="input-group">
						<div class="input-group-prepend">	
							<span class="input-group-text"><i class='bx bx-link'></i></span>
						</div>
						<input type="text" id="linkid" name="linkid" class="form-control border-left-0" placeholder="" value="<?=$_taskLink?>" >
						<div class="input-group-append">	
							<span class="input-group-text" style="cursor: pointer;" onclick="copyInfo('linkid');"><i class='bx bx-copy'></i></span>
						</div>
					</div>
				</div>

				<div class="form-group">
					<label>Įterpimo (angl. <i>embed</i>) kodas</label>
					<div class="input-group">
						<div class="input-group-prepend">	
							<span class="input-group-text">Plotis:</span>
						</div>
						<input type="text" id="obj_width" class="input-group-prepend" placeholder="" value="100%" style="width: 80px; background-color: rgb(255 255 255 / 14%); border: 1px solid rgb(255 255 255 / 35%); color: #ffffff; text-align: center;" >
						<div class="input-group-prepend">	
							<span class="input-group-text">Aukštis:</span>
						</div>
						<input type="text" id="obj_height" class="input-group-prepend" placeholder="" value="1000" style="width: 80px; background-color: rgb(255 255 255 / 14%); border: 1px solid rgb(255 255 255 / 35%); color: #ffffff; text-align: center;" >
						<div class="input-group-append">	
							<button type="button" class="btn btn-light px-5" onclick="updateIframObject();">Atnaujinti objektą</button>
						</div>						
					</div>
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class='bx bx-code-block'></i></span>
						</div>
						<textarea id="iframeCodeId" class="form-control" aria-label="With textarea" spellcheck="false"><?=$_taskFrameCode?></textarea>
						<div class="input-group-append">	
							<span class="input-group-text" style="cursor: pointer;" onclick="copyInfo('iframeCodeId');"><i class='bx bx-copy'></i></span>
						</div>
					</div>
				</div>

				<br />

				<div class="form-group">
					<button type="submit" value="Daryti" class="btn btn-light px-5" style="margin-right: 20px; min-width: 350px;">Grįžti į užduočių kūrimą</button>
				</div>

			</div>
		</div>

		<div class="card radius-15">
			<div class="card-body">
				<div class="card-title">
					<h4 class="mb-0" style="float: left;">Įterptinio objekto pavyzdys</h4>
				</div>

				<hr style="margin-top: 4rem;clear: both;" />		
				<?=$_taskFrameCode?>	
		</div>

	</div>
	</form>

	<script>
		var iframe = document.getElementsByTagName('iframe')[0];
		iframe.style.background = 'white';

		function updateIframObject() {
			var iframeTxt = document.getElementById('iframeCodeId').value;
			var newWidth = document.getElementById('obj_width').value;
			var newHeight = document.getElementById('obj_height').value;
			iframeTxt = iframeTxt.replace(/width="([^"]+)"/, 'width="' + newWidth + '"');
			iframeTxt = iframeTxt.replace(/height="([^"]+)"/, 'height="' + newHeight + '"');
			document.getElementById('iframeCodeId').value = iframeTxt;
			iframe.width = newWidth;
			iframe.height = newHeight;
		}

		function showAlert() {
		  var alertBox = document.getElementById("copyInfo");
		  alertBox.style["display"] = "block";
		  alertBox.classList.remove("hide");
		  alertBox.classList.add("show");
		}

		function hideAlert() {
		  var alertBox = document.getElementById("copyInfo");
		  alertBox.classList.remove("show");
		  alertBox.classList.add("hide");
		  setTimeout(() => {  alertBox.style["display"] = "none"; }, 500);
		}

		function copyInfo(fieldId) {
		  var copyText = document.getElementById(fieldId);
		  copyText.select();
		  copyText.setSelectionRange(0, 99999);
		  navigator.clipboard.writeText(copyText.value);
		  showAlert();
		  setTimeout(() => { hideAlert(); }, 3000);
		}	

	</script>

	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/popper.min.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>

	<script src="assets/plugins/simplebar/js/simplebar.min.js"></script>
	<script src="assets/plugins/metismenu/js/metisMenu.min.js"></script>
	<script src="assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js"></script>

</body>
</html>