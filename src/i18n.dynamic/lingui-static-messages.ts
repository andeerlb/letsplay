// This file exists solely to help Lingui detect and extract dynamic translation messages.
// The t`` macro marks messages that are used at runtime but cannot be statically analyzed.
// Do not import this file anywhere in your app — it should not be included in the production bundle.
// It is only used during the Lingui extraction process (via `npx lingui extract`).

import { t } from "@lingui/core/macro";

t`DARK`;
t`ENGLISH`;
t`SYSTEM`;
t`PORTUGUESE`;
t`LIGHT`;