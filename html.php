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

	<style>
		.dropdown-item {
			cursor: pointer;
		}
	</style>

</head>
<body class="bg-theme bg-theme1">
	<div class="wrapper">
		<div class="card radius-15">
			<div class="card-body">
				<div class="card-title">
					<h4 class="mb-0" style="float: left;">SCORM / PWA paketo kūrimas</h4>
	                <form action="index.php" method="post" enctype="multipart/form-data" style="float: right;">  
	                    <input type="button" name="btn_upload" class="btn btn-light px-5" onclick="selectFile();" value="Įkelti Zip failą korekcijoms" />  
	                    <input type="file" name="zip_file" id="zip_file" onchange="submit()" style="visibility:hidden;display:none;" />
						<input type="hidden" name="mod" value="uploadscorm">
	                </form>  
				</div>
				<hr style="margin-top: 4rem;clear: both;" />

				<form id="mainform" action="index.php" method="post">
					<div class="form-group">
						<label>Užduoties pavadinimas</label>
						<div class="input-group">
							<div class="input-group-prepend">	
								<span class="input-group-text"><i class='bx bx-text'></i></span>
							</div>
							<input type="text" name="t_title" class="form-control border-left-0" placeholder="Užduoties pavadinimas" value="<?=$_taskTitle?>" >
						</div>
					</div>

					<div class="form-group">
						<label>Trumpas užduoties pavadinimas (tai bus programos pavadinimas)</label>
						<div class="input-group">
							<div class="input-group-prepend">	
								<span class="input-group-text"><i class='bx bx-package'></i></span>
							</div>
							<input type="text" name="s_title" class="form-control border-left-0" placeholder="Užduoties trumpas pavadinimas" value="<?=$_shortTitle?>" >
						</div>
					</div>

					<div class="form-group">
						<label>Klausimų kiekis</label>
						<div class="input-group">
							<div class="input-group-prepend">	
								<span class="input-group-text"><i class='bx bx-list-ol'></i></span>
							</div>
							<input type="text" name="t_numquestions" class="form-control border-left-0" placeholder="10" value="<?=$_numQuestions?>" >
						</div>
					</div>

					<?php
						$_disabled = "disabled";
						if (strlen($_taskTiming) == 0) { 
							$_taskTiming = 0;
						}
						if ($_taskTiming == 0) {
							$_checked = "";
						} else {
							$_checked = "checked";
							$_disabled = "";
						}

						if (strlen($_taskMusic) == 0) { 
							$_taskMusic = 0;
						}
						if ($_taskMusic == 0) { 
							$m_checked = "";
						} else {
							$m_checked = "checked";
						}

					?>

					<div class="form-group">
						<label>Muzikos naudojimas (garso efektai liks bet kuriuo atveju)</label>
						<div class="input-group">
							<div class="form-check form-check-inline">
								<input name="t_music" style="margin-left: 10px;" class="form-check-input" type="checkbox" id="t_music" <?=$m_checked?>>
								<label class="form-check-label" for="t_music">(pažymėkite ar reikia muzikos)</label>
							</div>
						</div>
					</div>

					<div class="form-group">
						<label>Laiko apribojimas</label>
						<div class="input-group">
							<div class="form-check form-check-inline">
								<input name="t_timing" style="margin-left: 10px;" class="form-check-input" type="checkbox" id="t_timing" <?=$_checked?> onclick="toggle_timing_input()">
								<label class="form-check-label" for="t_timing" onclick="toggle_timing_input()">(pažymėkite ar reikia laiko apribojimo)</label>
							</div>
						</div>
					</div>

					<div class="form-group">
						<label>Laiko intervalas (sekundėmis)</label>
						<div class="input-group">
							<div class="input-group-prepend">	
								<span class="input-group-text">Trukmė</span>
							</div>
							<input type="text" name="t_duration" class="form-control border-left-0 timing_input" placeholder="30" value="<?=$_duration?>" <?=$_disabled?> >
							<div class="input-group-prepend">	
								<span class="input-group-text">Priedas</span>
							</div>
							<input type="text" name="t_bonus" class="form-control border-left-0 timing_input" placeholder="5" value="<?=$_bonus?>" <?=$_disabled?> >
							<div class="input-group-prepend">	
								<span class="input-group-text">Bauda</span>
							</div>
							<input type="text" name="t_fine" class="form-control border-left-0 timing_input" placeholder="5" value="<?=$_fine?>" <?=$_disabled?> >
						</div>
					</div>

					<?php
						$_operation_text = "<b>+</b> (sudėtis)";
						if (strlen($_operation) == 0) {
							$_operation = "+";
						} else {
							if ($_operation == "-") $_operation_text = "<b>-</b> (atimtis)";
							if ($_operation == "*") $_operation_text = "<b>*</b> (daugyba)";
							if ($_operation == "/") $_operation_text = "<b>/</b> (dalyba)";
						}
					?>
					<div class="form-group">
						<label>Operacija</label>
						<div class="input-group-prepend show">
							<button type="button" id="b_operation" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" value="+"><?=$_operation_text?></button>
							<input type="hidden" name="t_operation" id="t_operation" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" value="<?=$_operation?>"/>
							<div class="dropdown-menu hide" style="position: absolute; transform: translate3d(0px, 38px, 0px); top: 0px; left: 0px; will-change: transform;" x-placement="bottom-start">
								<a class="dropdown-item" onclick="change_button('+', '<b>+</b> (sudėtis)');"><b>+</b> (sudėtis)</a>
								<a class="dropdown-item" onclick="change_button('-', '<b>-</b> (atimtis)');"><b>-</b> (atimtis)</a>
								<a class="dropdown-item" onclick="change_button('*', '<b>*</b> (daugyba)');"><b>*</b> (daugyba)</a>
								<a class="dropdown-item" onclick="change_button('/', '<b>/</b> (dalyba)');"><b>/</b> (dalyba)</a>
							</div>
						</div>
					</div>

					<div class="form-group">
						<label>Pirma reikšmė (skaičius a iš formulės a + b = c)</label>
						<div class="input-group">
							<div class="input-group-prepend">	
								<span class="input-group-text">Nuo</span>
							</div>
							<input type="text" name="t_from1" class="form-control border-left-0" placeholder="0" value="<?=$_from1?>">
							<div class="input-group-prepend">	
								<span class="input-group-text">Iki</span>
							</div>
							<input type="text" name="t_to1" class="form-control border-left-0" placeholder="5" value="<?=$_to1?>">
						</div>
					</div>

					<div class="form-group">
						<label>Antra reikšmė (skaičius b iš formulės a + b = c)</label>
						<div class="input-group">
							<div class="input-group-prepend">	
								<span class="input-group-text">Nuo</span>
							</div>
							<input type="text" name="t_from2" class="form-control border-left-0" placeholder="0" value="<?=$_from2?>">
							<div class="input-group-prepend">	
								<span class="input-group-text">Iki</span>
							</div>
							<input type="text" name="t_to2" class="form-control border-left-0" placeholder="5" value="<?=$_to2?>">
						</div>
					</div>

					<div class="form-group">
						<label>Atsakymo intervalas (skaičius c iš formulės a + b = c)</label>
						<div class="input-group">
							<div class="input-group-prepend">	
								<span class="input-group-text">Nuo</span>
							</div>
							<input type="text" name="t_minval" class="form-control border-left-0" placeholder="0" value="<?=$_minval?>">
							<div class="input-group-prepend">	
								<span class="input-group-text">Iki</span>
							</div>
							<input type="text" name="t_maxval" class="form-control border-left-0" placeholder="10" value="<?=$_maxval?>">
						</div>
					</div>

					<div class="form-group">
						<label for="formControlRange">Įveikimo procentras</label>
						<div class="input-group">
							<input type="text" name="p_score_box" class="form-control border-left-0" id="p_score_box" onkeyup="document.getElementById('formControlRange').value = document.getElementById('p_score_box').value;" onchange="document.getElementById('formControlRange').value = document.getElementById('p_score_box').value;" value="<?=$_taskScore?>" >
							<input type="range" name="p_score" style="padding: 0;" class="form-control form-control-range" id="formControlRange" onchange="document.getElementById('p_score_box').value = document.getElementById('formControlRange').value;" value="<?=$_taskScore?>" >
						</div>
					</div>					

					<div class="form-group">
						<label>Autorius</label>
						<div class="input-group">
							<div class="input-group-prepend">	
								<span class="input-group-text"><i class='bx bx-user'></i></span>
							</div>
							<input type="text" name="t_author" class="form-control border-left-0" placeholder="Vardas ir pavardė" value="<?=$_taskAuthor?>" >
						</div>
					</div>

					<div class="form-group">
						<label>Unikalus užduoties identifikatorius (jis turi būti be tarpų ir diakritinių ženklų)</label>
						<div class="input-group">
							<div class="input-group-prepend">	
								<span class="input-group-text"><i class='bx bx-anchor'></i></span>
							</div>
							<input type="text" name="t_id" class="form-control border-left-0" placeholder="Unikalus_uzduoties_id" value="<?=$_taskId?>" >
							<div class="input-group-append">	
								<span class="input-group-text clickable" onclick="generateRandomId(this.parentElement.parentElement)"><i class='bx bx-refresh'></i></span>
							</div>								
						</div>
					</div>

					<br />

					<div class="form-group">
						<button type="submit" value="Daryti" class="btn btn-light px-5" style="margin-right: 20px; min-width: 350px;" onclick="document.getElementById('mainform').target = '_self'; $('#mod').val('makescorm');">Sukonstruoti ir atsisiųsti paketą</button>
						<button type="submit" value="Daryti2" class="btn btn-light px-5" style="margin-right: 20px; min-width: 350px;" onclick="document.getElementById('mainform').target = '_blank'; $('#mod').val('makeweb');">Sukonstruoti ir paskelbti serveryje</button>
						<button type="submit" value="Daryti3" class="btn btn-light px-5" style="min-width: 350px;" onclick="document.getElementById('mainform').target = '_blank'; $('#mod').val('maketest');">Testuoti paketą</button>
					</div>

					<input type="hidden" name="mod" id="mod" value="makescorm">

				</form>

			</div>
		</div>
	</div>
	</form>

	<script>

		function generateRandomId(parentElement) {
			inputElement = parentElement.querySelector("input");
			inputElement.value = "task_" + Math.floor(Math.random() * 100000000);
		}

		function change_button(new_op, new_text) {
			$("#t_operation").prop('value', new_op);
			$("#b_operation").html(new_text);
		}

		function toggle_timing_input() {
			if ($("#t_timing").is(":checked")) {
				$(".timing_input").prop('disabled', false);
			} else {
				$(".timing_input").prop('disabled', true);				
			}
		}

		function selectFile() {
			$('input[type="file"]').click();
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