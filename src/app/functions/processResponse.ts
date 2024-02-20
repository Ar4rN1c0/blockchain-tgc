interface ApiResponse {
    period: string;
    wallet: string;
}

interface PeriodOccurrence {
    period: string;
    isOcc: boolean;
}

export default function processApiResponse(apiResponse: ApiResponse[]): PeriodOccurrence[] {
    const allPeriods: Array<string> = ["1", "2", "3", "4", "5", "6", "7", "8"];
    if (apiResponse === undefined) {
        return [
            {
                period: "1",
                isOcc: false
            },
            {
                period: "2",
                isOcc: false
            },
            {
                period: "3",
                isOcc: false
            },
            {
                period: "4",
                isOcc: false
            },
            {
                period: "5",
                isOcc: false
            },
            {
                period: "6",
                isOcc: false
            },
            {
                period: "7",
                isOcc: false
            },
            {
                period: "8",
                isOcc: false
            }
        ];
    } 
    if (!apiResponse || !Array.isArray(apiResponse)) {
        return [];
    }
    const periodsOccurrences: PeriodOccurrence[] = allPeriods.map((period) => ({
        period,
        isOcc: false,
    }));

    apiResponse.forEach((response) => {

        const periodIndex = allPeriods.indexOf(response.period);
        if (periodIndex !== -1) {

            periodsOccurrences[periodIndex].isOcc = true;
        }
    });
    //console.log(periodsOccurrences)
    return periodsOccurrences;
}
