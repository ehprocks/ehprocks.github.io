# react-discord-invite

```bash
npm install -D react-discord-invite
```

```javascript
import DiscordInvite from "react-discord-invite";
import "react-discord-invite/dist/style.css";
```

```javascript
<DiscordInvite palette="light" guild="708050277957238784"/>
<DiscordInvite palette="dark" guild="4FBnfPA"/>
<DiscordInvite guild="4FBnfPA"/>
```
### Props
| Prop | Default | Type | Description |
| - | - | - | - |
| palette |	"dark" | "light" \| "dark" | Sets the color scheme of the component. |
| guild | *required* | String | Sets the ID or invite code of the guild. |