import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import Colors from "../../shared/utils/AssetsReferences/Colors";

interface CalendarProps extends SvgProps {
    width?: string;
    height?: string;
    color?: string;
}

const initialState: CalendarProps = {
    width: "30",
    height: "30",
    color: Colors.black2E,
};

const Calendar: React.FC<CalendarProps> = (
    props: CalendarProps
) => {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 21 21"
            fill="none"
            {...props}
        >
            <Path
                d="M4.77.308a.868.868 0 00-.324.279l-.119.172-.012 1.743c-.008 1.19 0 1.792.033 1.899.053.18.25.418.418.504.066.033.234.07.381.087.48.045.833-.111 1.018-.452.09-.168.09-.205.102-1.804.012-1.809 0-1.973-.205-2.22-.184-.225-.398-.31-.775-.31-.25 0-.349.02-.517.102zM15.401.262a.972.972 0 00-.426.435c-.058.123-.066.378-.078 1.731-.017 2.006-.004 2.08.377 2.387.14.115.189.127.509.144.402.016.607-.033.791-.189.28-.238.283-.246.283-2.186 0-1.73 0-1.747-.09-1.928a1.125 1.125 0 00-.25-.303c-.152-.12-.18-.127-.574-.14-.287-.004-.455.008-.542.05z"
                fill={props.color}
            />
            <Path
                d="M.984 1.944c-.369.099-.705.39-.877.759l-.086.189V19.79l.11.234c.127.27.373.525.64.656l.193.094h19.072l.193-.094c.267-.131.513-.386.64-.656l.11-.234V2.892l-.114-.23a1.514 1.514 0 00-.677-.665c-.18-.086-.263-.09-1.432-.102l-1.242-.012v1.37c0 1.127-.013 1.398-.066 1.554-.148.443-.587.738-1.214.816-.882.115-1.53-.188-1.854-.865l-.127-.267-.012-1.304-.013-1.3H6.932v1.197c0 1.3-.03 1.522-.218 1.846a1.57 1.57 0 01-.68.599c-.304.143-.936.176-1.297.07a1.513 1.513 0 01-.955-.8l-.111-.226-.012-1.345-.013-1.341-1.238.004c-.841 0-1.3.016-1.424.053zm18.663 11.407v6.131H1.354V7.22h18.292v6.132z"
                fill={props.color}
            />
            <Path
                d="M11.062 8.93c-.016.011-.029.536-.029 1.16 0 .824.013 1.144.05 1.181.07.07 2.58.07 2.649 0 .07-.07.07-2.252 0-2.321-.037-.037-.394-.05-1.345-.05-.714 0-1.313.013-1.325.03zM15 8.93c-.017.011-.03.536-.03 1.16 0 .824.013 1.144.05 1.181.07.07 2.58.07 2.65 0 .07-.07.07-2.252 0-2.321-.037-.037-.394-.05-1.346-.05-.714 0-1.312.013-1.325.03zM3.203 12.362c-.032.037-.045.39-.037 1.198l.013 1.144 1.308.012c.931.009 1.325-.004 1.362-.036.078-.066.086-2.248.008-2.326-.078-.078-2.588-.07-2.654.008zM7.14 12.362c-.032.037-.044.39-.036 1.198l.012 1.144 1.309.012c.93.009 1.324-.004 1.361-.036.078-.066.086-2.248.009-2.326-.078-.078-2.589-.07-2.654.008zM11.078 12.362c-.032.037-.045.39-.037 1.198l.013 1.144 1.308.012c.931.009 1.325-.004 1.362-.036.078-.066.086-2.248.008-2.326-.078-.078-2.588-.07-2.654.008zM15.016 12.362c-.033.037-.045.39-.037 1.198l.012 1.144 1.309.012c.93.009 1.324-.004 1.361-.036.078-.066.086-2.248.008-2.326-.077-.078-2.588-.07-2.653.008zM3.232 15.754c-.07.037-.074.14-.074 1.177 0 .833.013 1.153.05 1.19.036.037.385.049 1.308.049 1.09 0 1.271-.008 1.325-.066.057-.053.065-.217.065-1.165 0-1.09 0-1.103-.09-1.164-.078-.058-.27-.066-1.304-.066-.747 0-1.239.02-1.28.045zM7.17 15.754c-.07.037-.074.14-.074 1.177 0 .833.012 1.153.049 1.19.037.037.385.049 1.308.049 1.091 0 1.272-.008 1.325-.066.058-.053.066-.217.066-1.165 0-1.09 0-1.103-.09-1.164-.078-.058-.271-.066-1.305-.066-.746 0-1.238.02-1.28.045zM11.107 15.754c-.07.037-.074.14-.074 1.185 0 1.091.004 1.149.078 1.19.05.024.541.04 1.313.04 1.062 0 1.238-.007 1.292-.065.057-.053.065-.217.065-1.165 0-1.09 0-1.103-.09-1.164-.078-.058-.27-.066-1.304-.066-.747 0-1.239.02-1.28.045zM15.044 15.754c-.07.037-.073.14-.073 1.185 0 1.091.004 1.149.078 1.19.049.024.541.04 1.312.04 1.062 0 1.239-.007 1.292-.065.058-.053.066-.217.066-1.165 0-1.09 0-1.103-.09-1.164-.078-.058-.271-.066-1.305-.066-.746 0-1.239.02-1.28.045z"
                fill={props.color}
            />
        </Svg>
    );
};

Calendar.defaultProps = initialState;

export default Calendar;