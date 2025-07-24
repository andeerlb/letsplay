package com.letsplay

import android.app.ActivityManager
import android.content.res.Configuration
import android.graphics.Color
import android.os.Build
import android.os.Bundle
import android.view.View
import android.view.WindowManager
import androidx.core.content.ContextCompat
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  override fun getMainComponentName(): String = "letsplay"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
    DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    setTheme(R.style.Theme)
    super.onCreate(null)

    val window = window

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
      window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION)
      window.decorView.systemUiVisibility = (
              View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION or
                      View.SYSTEM_UI_FLAG_LAYOUT_STABLE
              )
      window.navigationBarColor = Color.TRANSPARENT
    }

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
      window.statusBarColor = Color.TRANSPARENT
    }

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
      val decor = window.decorView
      val nightModeFlags = resources.configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK

      if (nightModeFlags == Configuration.UI_MODE_NIGHT_YES) {
        decor.systemUiVisibility = decor.systemUiVisibility and View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR.inv()
      } else {
        decor.systemUiVisibility = decor.systemUiVisibility or View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
      }
    }

    val color = ContextCompat.getColor(this, R.color.task_description_color)
    val taskDesc = ActivityManager.TaskDescription(
      getString(R.string.app_name),
      null,
      color
    )
    setTaskDescription(taskDesc)
  }
}
