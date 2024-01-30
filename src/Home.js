import React, { useState } from "react";

function Home() {
	const [page, setPage] = useState(0);
	const [employee, setEmployee] = useState("Labourer 1");
	const [employee1, setEmployee1] = useState(0);
	const [employee2, setEmployee2] = useState(0);
	const [employee3, setEmployee3] = useState(0);
	const [employee4, setEmployee4] = useState(0);
	const [employee5, setEmployee5] = useState(0);

	const finalHourArray = [
		employee1,
		employee2,
		employee3,
		employee4,
		employee5,
	];

	const hoursLessThan30 = finalHourArray.filter((v) => +v < 30).map(Number);
	const hoursGreaterThan40 = finalHourArray.filter((v) => +v > 40).map(Number);
	const hoursBetween3739 = finalHourArray
		.filter((v) => +v > 37 && +v < 39)
		.map(Number);

	console.log(finalHourArray);

	function page1Submitted(e) {
		e.preventDefault();
		setPage(1);
	}

	function returnHome() {
		setPage(0);
	}

	function viewHrs() {
		setPage(2);
	}

	function resetHrs() {
		setEmployee1(0);
		setEmployee2(0);
		setEmployee3(0);
		setEmployee4(0);
		setEmployee5(0);
	}

	//??????????????????????????????????????????????????????????? PAGE ONE

	function Login() {
		const [password, setPassword] = useState("");
		const [redText, setRedText] = useState(false);

		function enterError() {
			if (employee && password === "") {
				return setRedText(true);
			}
			if (employee || password === "") {
				return setRedText(true);
			}
		}

		function handleEmployee(e) {
			setEmployee(e.target.value);
		}

		return (
			<div className="page-1">
				{" "}
				<p>Please log into thy account</p>
				<form onSubmit={page1Submitted}>
					<select
						id="employees"
						name="employees"
						onChange={handleEmployee}
						required
						style={{ width: "258px", height: "45px" }}
						value={employee}
					>
						<option value="Labourer 1">
							<p>Labourer 1</p>
						</option>
						<option value="Labourer 2">
							{" "}
							<p>Labourer 2</p>
						</option>
						<option value="Labourer 3">
							{" "}
							<p>Labourer 3</p>
						</option>
						<option value="Labourer 4">
							{" "}
							<p>Labourer 4</p>
						</option>
						<option value="Labourer 4">
							{" "}
							<p>Labourer 5</p>
						</option>
					</select>
					<p
						style={
							redText
								? { color: "red", margin: "10px 0 0 0" }
								: { margin: "10px 0 0 0" }
						}
					>
						password
					</p>
					<input
						type="password"
						required
						style={{ fontSize: "medium" }}
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					></input>
					<input
						type="submit"
						className="page-1-submit"
						value="Enter"
						style={{
							paddingTop: "7px",
							margin: "40px auto 0 auto",
							width: "258px",
							height: "40px",
						}}
						onClick={enterError}
					></input>
				</form>
				<button
					className="page-1-view-hrs"
					style={{
						paddingTop: "7px",
						margin: "20px auto 0 auto",
						width: "278px",
						height: "40px",
					}}
					onClick={resetHrs}
				>
					Reset Labourer Hours
				</button>
				<button
					className="page-1-view-hrs"
					style={{
						paddingTop: "7px",
						margin: "60px auto 0 auto",
						width: "278px",
						height: "40px",
					}}
					onClick={viewHrs}
				>
					View Labourer Total Hours
				</button>
			</div>
		);
	}

	//??????????????????????????????????????????????????????????? PAGE TWO

	function HoursInput() {
		const [mondayHrs, setMondayHours] = useState(0);
		const [tuesdayHrs, setTuesdayHours] = useState(0);
		const [wednesdayHrs, setWednesdayHours] = useState(0);
		const [thursdayHrs, setThursdayHours] = useState(0);
		const [fridayHrs, setFridayHours] = useState(0);

		const weekdayHrs = [
			Number(`${mondayHrs}`),
			Number(`${tuesdayHrs}`),
			Number(`${wednesdayHrs}`),
			Number(`${thursdayHrs}`),
			Number(`${fridayHrs}`),
		];

		function addHours() {
			let sum = 0;
			for (let i = 0; i < weekdayHrs.length; i++) {
				sum += weekdayHrs[i];
			}
			employee === "Labourer 1" && setEmployee1(sum) && setEmployee(1);
			employee === "Labourer 2" && setEmployee2(sum) && setEmployee(2);
			employee === "Labourer 3" && setEmployee3(sum) && setEmployee(3);
			employee === "Labourer 4" && setEmployee4(sum) && setEmployee(4);
			employee === "Labourer 5" && setEmployee5(sum) && setEmployee(5);
		}

		return (
			<div className="page-2">
				{employee === "Labourer 1" && (
					<>
						<p>Labourer Name: Esmond Hamme</p>
						<p>Labourer ID: 867-5309</p>
					</>
				)}
				{employee === "Labourer 2" && (
					<>
						<p>Labourer Name: Beowulf Tollere</p>
						<p>Labourer ID: 867-5310</p>
					</>
				)}
				{employee === "Labourer 3" && (
					<>
						<p>Labourer Name: Hilda Earlse</p>
						<p>Labourer ID: 867-5311</p>
					</>
				)}
				{employee === "Labourer 4" && (
					<>
						<p>Labourer Name: Kenelm Hartelle</p>
						<p>Labourer ID: 867-5312</p>
					</>
				)}
				{employee === "Labourer 5" && (
					<>
						<p>Labourer Name: Oletha Haige</p>
						<p>Labourer ID: 867-5313</p>
					</>
				)}
				<p>Week Number: 1</p>
				<div className="week-grid">
					<p>Monday</p>
					<p>Tuesday</p>
					<p>Wednesday</p>
					<p>Thursday</p>
					<p>Friday</p>
					<span className="grid-span">
						<input
							type="number"
							placeholder="0"
							value={mondayHrs}
							onChange={(e) => {
								setMondayHours(e.target.value);
							}}
						></input>
						<p>hours</p>
					</span>
					<span className="grid-span">
						<input
							type="number"
							placeholder="0"
							value={tuesdayHrs}
							onChange={(e) => {
								setTuesdayHours(e.target.value);
							}}
						></input>
						<p>hours</p>
					</span>
					<span className="grid-span">
						<input
							type="number"
							placeholder="0"
							value={wednesdayHrs}
							onChange={(e) => {
								setWednesdayHours(e.target.value);
							}}
						></input>
						<p>hours</p>
					</span>
					<span className="grid-span">
						<input
							type="number"
							placeholder="0"
							value={thursdayHrs}
							onChange={(e) => {
								setThursdayHours(e.target.value);
							}}
						></input>
						<p>hours</p>
					</span>
					<span className="grid-span">
						<input
							type="number"
							placeholder="0"
							value={fridayHrs}
							onChange={(e) => {
								setFridayHours(e.target.value);
							}}
						></input>
						<p>hours</p>
					</span>
				</div>
				<div className="hour-eval">
					{mondayHrs <= 4 && mondayHrs > 0 ? (
						<p>On Monday, thou should'st toiled moe</p>
					) : (
						""
					)}
					{mondayHrs >= 10 ? <p>On Monday, thou should'st toiled less</p> : ""}
					{tuesdayHrs <= 4 && tuesdayHrs > 0 ? (
						<p>On Tuesday, thou should'st toiled moe</p>
					) : (
						""
					)}
					{tuesdayHrs >= 10 ? (
						<p>On Tuesday, thou should'st toiled less</p>
					) : (
						""
					)}
					{wednesdayHrs <= 4 && wednesdayHrs > 0 ? (
						<p>On Wednesday, thou should'st toiled moe</p>
					) : (
						""
					)}
					{wednesdayHrs >= 10 ? (
						<p>On Wednesday, thou should'st toiled less</p>
					) : (
						""
					)}
					{thursdayHrs <= 4 && thursdayHrs > 0 ? (
						<p>On Thursday, thou should'st toiled moe</p>
					) : (
						""
					)}
					{thursdayHrs >= 10 ? (
						<p>On Thursday, thou should'st toiled less</p>
					) : (
						""
					)}
					{fridayHrs <= 4 && fridayHrs > 0 ? (
						<p>On Friday, thou should'st toiled moe</p>
					) : (
						""
					)}
					{fridayHrs >= 10 ? <p>On Friday, thou should'st toiled less</p> : ""}
				</div>
				<button
					style={{ paddingTop: "6px" }}
					className="page-2-button"
					onClick={() => {
						returnHome();
						addHours();
					}}
				>
					Input Thy Entries to Log
				</button>
			</div>
		);
	}

	//??????????????????????????????????????????????????????????? PAGE THREE

	function EmployeeTotalHours() {
		return (
			<div className="page-3">
				<div className="page-3-grid">
					<span>
						<p>Labourer 1</p>
						<p>Esmond Hamme</p>
						<p>#867-5309</p>
					</span>
					<span>
						<p>Labourer 2</p>
						<p>Beowulf Tollere</p>
						<p>#867-5310</p>
					</span>
					<span>
						<p>Labourer 3</p>
						<p>Hilda Earlse</p>
						<p>#867-5311</p>
					</span>
					<span>
						<p>Labourer 4</p>
						<p>Kenelm Hartelle</p>
						<p>#867-5312</p>
					</span>
					<span>
						<p>Labourer 5</p>
						<p>Oletha Haige</p>
						<p>#867-5313</p>
					</span>
					<span className="grid-span">
						<p>{finalHourArray[0]}</p>
						<p>hours total</p>
					</span>
					<span className="grid-span">
						<p>{finalHourArray[1]}</p>
						<p>hours total</p>
					</span>
					<span className="grid-span">
						<p>{finalHourArray[2]}</p>
						<p>hours total</p>
					</span>
					<span className="grid-span">
						<p>{finalHourArray[3]}</p>
						<p>hours total</p>
					</span>
					<span className="grid-span">
						<p>{finalHourArray[4]}</p>
						<p>hours total</p>
					</span>
				</div>
				<div className="final-review-p">
					{/* ********************************************************** TOO LITTLE REVIEW */}
					{finalHourArray[0] < 30 && (
						<p>
							Esmond Hamme only worked {finalHourArray[0]} hours.. Make it known
							unto them that they shall be released from service.{" "}
						</p>
					)}
					{finalHourArray[1] < 30 && (
						<p>
							Beowulf Tollere only worked {finalHourArray[1]} hours.. Make it
							known unto them that they shall be released from service.{" "}
						</p>
					)}
					{finalHourArray[2] < 30 && (
						<p>
							Hilda Earlse only worked {finalHourArray[2]} hours.. Make it known
							unto them that they shall be released from service.{" "}
						</p>
					)}
					{finalHourArray[3] < 30 && (
						<p>
							Kenelm Hartelle only worked {finalHourArray[3]} hours.. Make it
							known unto them that they shall be released from service.{" "}
						</p>
					)}
					{finalHourArray[4] < 30 && (
						<p>
							Oletha Haige only worked {finalHourArray[4]} hours.. Make it known
							unto them that they shall be released from service.{" "}
						</p>
					)}

					{/* ********************************************************** TOO MUCH REVIEW */}
					{finalHourArray[0] > 40 && (
						<p>
							Esmond Hamme worked {finalHourArray[0]} hours.. Let it be known
							unto them that they needs reduce thy toil.{" "}
						</p>
					)}
					{finalHourArray[1] > 40 && (
						<p>
							Beowulf Tollere worked {finalHourArray[1]} hours.. Let it be known
							unto them that they needs reduce thy toil.{" "}
						</p>
					)}
					{finalHourArray[2] > 40 && (
						<p>
							Hilda Earlse worked {finalHourArray[2]} hours.. Let it be known
							unto them that they needs reduce thy toil.{" "}
						</p>
					)}
					{finalHourArray[3] > 40 && (
						<p>
							Kenelm Hartelle worked {finalHourArray[3]} hours.. Let it be known
							unto them that they needs reduce thy toil.{" "}
						</p>
					)}
					{finalHourArray[4] > 40 && (
						<p>
							Oletha Haige worked {finalHourArray[4]} hours.. Let it be known
							unto them that they needs reduce thy toil.{" "}
						</p>
					)}
					{/* ********************************************************** PERFECT REVIEW */}
					{finalHourArray[0] > 30 && finalHourArray[0] < 40 && (
						<p>
							Esmond Hamme toiled {finalHourArray[0]} hours! Let it be known
							unto them that they art deserving of an augmentation in
							recompense.{" "}
						</p>
					)}
					{finalHourArray[1] > 40 && finalHourArray[1] < 40 && (
						<p>
							Beowulf Tollere toiled {finalHourArray[1]} hours! Let it be known
							unto them that they art deserving of an augmentation in
							recompense.{" "}
						</p>
					)}
					{finalHourArray[2] > 40 && finalHourArray[2] < 40 && (
						<p>
							Hilda Earlse toiled {finalHourArray[2]} hours! Let it be known
							unto them that they art deserving of an augmentation in
							recompense.{" "}
						</p>
					)}
					{finalHourArray[3] > 40 && finalHourArray[3] < 40 && (
						<p>
							Kenelm Hartelle toiled {finalHourArray[3]} hours! Let it be known
							unto them that they art deserving of an augmentation in
							recompense.{" "}
						</p>
					)}
					{finalHourArray[4] > 40 && finalHourArray[4] < 40 && (
						<p>
							Oletha Haige toiled {finalHourArray[4]} hours! Let it be known
							unto them that they art deserving of an augmentation in
							recompense.{" "}
						</p>
					)}
				</div>
				<div className="page-3-final-grid">
					<div>
						<p>
							{hoursLessThan30.length} labourers hast toiled less than 30 hours.
						</p>
					</div>
					<div>
						<p>
							{hoursGreaterThan40.length} labourers hast toiled moe than 40
							hours.
						</p>
					</div>
					<div>
						<p>
							{hoursBetween3739.length} labourers hast wrought a perfect measure
							of time.
						</p>
					</div>
					<button className="page-3-button" onClick={returnHome}>
						<p>Finish</p> <p>Assessment</p>
					</button>
				</div>
			</div>
		);
	}

	//??????????????????????????????????????????????????????????? RETURN

	return (
		<div className="home">
			<h1>Ye Olde' Labourer Hourly Report</h1>
			{page === 0 ? <Login /> : ""}
			{page === 1 ? <HoursInput /> : ""}
			{page === 2 ? <EmployeeTotalHours /> : ""}
		</div>
	);
}

export default Home;
