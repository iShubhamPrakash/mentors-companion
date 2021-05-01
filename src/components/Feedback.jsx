import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Badge,
	Heading,
	Stack,
	Tag,
	TagLabel,
	TagLeftIcon,
	TagRightIcon,
	TagCloseButton,
	Link,
} from "@chakra-ui/react";

import { ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";

import moment from "moment";

const badgeColor = {
	1: "red",
	3: "yellow",
	5: "green",
};
export const Feedback = ({ data }) => {
	return (
		<div className="feedback" key={data.id}>
			<Box flex="1" textAlign="left" pb={4} pl={4}>
				<div className="project_name">
					<Heading as="h1" size="md" isTruncated>
						🗂 &nbsp;{data.project.name}
					</Heading>
				</div>
			</Box>

			<Tag className="review_link">
				{" "}
				<Link
					href={`https://review.udacity.com/#!/reviews/${data.submission_id}`}
					isExternal
				>
					Open Review <ExternalLinkIcon mx="2px" />
				</Link>
			</Tag>

			<Accordion allowToggle allowMultiple>
				{data.responses.feedback.map((feedbackData) => (
					<AccordionItem key={data.submission_id + feedbackData.key}>
						<h2>
							<AccordionButton _expanded={{ bg: "#f4f7f9", color: "#044793" }}>
								<Box flex="5" textAlign="left">
									<strong>
										📌 {feedbackData.key.split("_")[1].toUpperCase()} &nbsp;
									</strong>
									{feedbackData.question_text}
								</Box>
								<Box flex="1" textAlign="right">
									<Badge colorScheme={badgeColor[feedbackData.rating]}>
										{feedbackData.rating}
									</Badge>{" "}
									&nbsp;
									{Array(5)
										.fill("")
										.map((_, i) => (
											<StarIcon
												key={i}
												color={
													i < feedbackData.rating ? "green.300" : "gray.300"
												}
											/>
										))}
									&nbsp;
								</Box>

								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							<div className="student_comment">
								📝 {feedbackData.comment ? feedbackData.comment : "..."}
							</div>
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
			<Box flex="1" textAlign="right" className="feedback_footer">
				<small title="Total points">
					⭐️{" "}
					{data.responses.feedback
						.map((fd) => parseInt(fd.rating))
						.reduce((a, c) => a + c)}
					/ 25
				</small>{" "}
				&nbsp;&nbsp;&nbsp;&nbsp;
				<small title="Submission Id">🔖 {data.submission_id}</small>{" "}
				&nbsp;&nbsp;&nbsp;&nbsp;
				<small title="Review date">
					🗓 {moment(data.created_at).format("LL")}
				</small>
			</Box>
		</div>
	);
};
