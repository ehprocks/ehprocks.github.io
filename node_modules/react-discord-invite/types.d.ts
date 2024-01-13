
declare module "react-discord-invite" {

    interface Props {

        /*
         * The ID or invite code of the server.
         */
        guild: string;

        /*
         * The color theme of the component.
        */
        palette?: "light" | "dark";

        /*
         * Weather or not the component should skip rendering a shadow.
        */
        flat?: boolean;

    }

    export default class DiscordInvite extends React.Component<Props> { }

}
