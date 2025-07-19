package com.letsplay

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.Locale

class DeviceLocaleModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "DeviceLocale"
    }

    @ReactMethod
    fun getLanguage(promise: Promise) {
        try {
            val language = Locale.getDefault().language // ex: "pt", "en"
            promise.resolve(language)
        } catch (e: Exception) {
            promise.reject("ERROR_GETTING_LANGUAGE", "Not was possible to received informations", e)
        }
    }
}