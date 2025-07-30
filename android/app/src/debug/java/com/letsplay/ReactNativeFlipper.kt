package com.letsplay

import android.content.Context
import com.facebook.flipper.android.AndroidFlipperClient
import com.facebook.flipper.android.utils.FlipperUtils
import com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin
import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor
import com.facebook.flipper.plugins.network.NetworkFlipperPlugin
import com.facebook.react.ReactInstanceManager
import com.facebook.react.modules.network.NetworkingModule

object ReactNativeFlipper {
    fun initializeFlipper(context: Context, reactInstanceManager: ReactInstanceManager) {
        if (FlipperUtils.shouldEnableFlipper(context)) {
            val networkFlipperPlugin = NetworkFlipperPlugin()
            NetworkingModule.setCustomClientBuilder { builder ->
                builder.addNetworkInterceptor(FlipperOkhttpInterceptor(networkFlipperPlugin))
            }

            val client = AndroidFlipperClient.getInstance(context)
            client.addPlugin(networkFlipperPlugin)
            client.addPlugin(CrashReporterPlugin.getInstance())
            client.start()
        }
    }
}