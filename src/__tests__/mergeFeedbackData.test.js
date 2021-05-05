import { mergeTwoFeedbackDataArray } from "../Utils/mergeFeedbackData";

const dataOld = [
	{
		id: 1,
		submission_id: 123,
		rating: null,
		body: null,
		created_at: "2021-04-30T20:04:57.705Z",
		updated_at: "2021-04-30T20:04:57.705Z",
		read_at: null,
		responses: {},
	},
	{
		id: 2,
		submission_id: 456,
		rating: null,
		body: null,
		created_at: "2021-04-30T20:04:57.705Z",
		updated_at: "2021-04-30T20:04:57.705Z",
		read_at: null,
		responses: {},
	},
	{
		id: 3,
		submission_id: 789,
		rating: null,
		body: null,
		created_at: "2021-04-30T20:04:57.705Z",
		updated_at: "2021-04-30T20:04:57.705Z",
		read_at: null,
		responses: {},
	},
];

const dataNew = [
	{
		id: 4,
		submission_id: 1231,
		rating: null,
		body: null,
		created_at: "2021-04-30T20:04:57.705Z",
		updated_at: "2021-04-30T20:04:57.705Z",
		read_at: null,
		responses: {},
	},
	{
		id: 5,
		submission_id: 1232,
		rating: null,
		body: null,
		created_at: "2021-04-30T20:04:57.705Z",
		updated_at: "2021-04-30T20:04:57.705Z",
		read_at: null,
		responses: {},
	},
	{
		id: 1,
		submission_id: 123,
		rating: null,
		body: null,
		created_at: "2021-04-30T20:04:57.705Z",
		updated_at: "2021-04-30T20:04:57.705Z",
		read_at: null,
		responses: {},
	},
	{
		id: 2,
		submission_id: 456,
		rating: null,
		body: null,
		created_at: "2021-04-30T20:04:57.705Z",
		updated_at: "2021-04-30T20:04:57.705Z",
		read_at: null,
		responses: {},
	},
];

const correctOutput = [
	{
		id: 4,
		submission_id: 1231,
		rating: null,
		body: null,
		created_at: "2021-04-30T20:04:57.705Z",
		updated_at: "2021-04-30T20:04:57.705Z",
		read_at: null,
		responses: {},
	},
	{
		id: 5,
		submission_id: 1232,
		rating: null,
		body: null,
		created_at: "2021-04-30T20:04:57.705Z",
		updated_at: "2021-04-30T20:04:57.705Z",
		read_at: null,
		responses: {},
	},
	{
		id: 1,
		submission_id: 123,
		rating: null,
		body: null,
		created_at: "2021-04-30T20:04:57.705Z",
		updated_at: "2021-04-30T20:04:57.705Z",
		read_at: null,
		responses: {},
	},
	{
		id: 2,
		submission_id: 456,
		rating: null,
		body: null,
		created_at: "2021-04-30T20:04:57.705Z",
		updated_at: "2021-04-30T20:04:57.705Z",
		read_at: null,
		responses: {},
	},
	{
		id: 3,
		submission_id: 789,
		rating: null,
		body: null,
		created_at: "2021-04-30T20:04:57.705Z",
		updated_at: "2021-04-30T20:04:57.705Z",
		read_at: null,
		responses: {},
	},
];

// Unit tests for mergeTwoFeedbackDataArray method

describe("Testing mergeTwoFeedbackDataArray method", () => {
	test("should be defined", () => {
		expect(mergeTwoFeedbackDataArray).toBeDefined();
	});

	test("should return an empty array if both inputs are empty array", () => {
		expect(mergeTwoFeedbackDataArray([], [])).toEqual([]);
	});

	test("should return valid output if first inputs is an empty array", () => {
		expect(mergeTwoFeedbackDataArray([], dataNew)).toEqual(dataNew);
	});

	test("should return valid output if second inputs is an empty array", () => {
		expect(mergeTwoFeedbackDataArray(dataOld, [])).toEqual(dataOld);
	});

	test("should return valid output if both inputs is non empty array", () => {
		expect(mergeTwoFeedbackDataArray(dataOld, dataNew)).toEqual(correctOutput);
	});
});
