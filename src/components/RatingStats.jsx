import React from "react";
import { Stat, StatLabel, StatNumber, HStack, Box } from "@chakra-ui/react";

export const RatingStats = (props) => {
	const { totalRevies } = props;
	return (
		<div className="ratingStat_container">
			<HStack spacing="24px">
				<Box w="50%">
					<Stat>
						<StatLabel>Total reviews</StatLabel>
						<StatNumber>{totalRevies}</StatNumber>
						{/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
					</Stat>
				</Box>

				{/* <Box w="50%">
					<Stat>
						<VStack align="stretch">
							<Box>🙂 1</Box>
							<Box>😐 2</Box>
							<Box>🙁 3</Box>
						</VStack>
					</Stat>
				</Box> */}
				{/* <Box w="50%">
					<Stat>
						<StatLabel>NPFS score</StatLabel>
						<StatNumber>{NPFS}</StatNumber>
						<StatHelpText>Feb 12 - Feb 28</StatHelpText>
					</Stat>
				</Box> */}
			</HStack>

			{/* <HStack spacing="24px">
				<Box w="33.33%" p={1}>
					🙂 1
				</Box>
				<Box w="33.33%" p={1}>
					😐 2
				</Box>

				<Box w="33.33%" p={1}>
					<Box>🙁 3</Box>
				</Box>
			</HStack> */}
		</div>
	);
};
