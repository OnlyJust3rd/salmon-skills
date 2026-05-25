---
type: "medium"
title: "Texture Sampling in Shader Programming"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/digital-media/computer-graphics/shader-programming/microskills/texture-sampling|texture-sampling]]"
learning-time-in-minutes: 5
---
# Texture Sampling in Shader Programming

Texture sampling is a fundamental technique in shader programming that allows us to read data from an image (a texture) and use that data to influence how a surface looks. This is how we get details like wood grain, brick patterns, or even complex procedural effects onto our 3D models.

## What is Texture Sampling?

Imagine a 3D object. To make it look realistic, we need to give its surfaces color, roughness, normal details, and more. Instead of trying to define these properties mathematically for every single point on the surface, we use textures.

A texture is essentially a 2D grid of pixels, where each pixel stores a color value (or other data). Texture sampling is the process within a shader that takes a specific point on a 3D surface and calculates which pixel in the texture corresponds to that point, then retrieves the color from that pixel.

This retrieved color is then used to modify the final color of the surface being rendered.

## The UV Coordinate System

To sample a texture, we need a way to tell the shader *where* on the texture we want to read from. This is done using UV coordinates.

*   **U:** Represents the horizontal axis of the texture (like the X-axis).
*   **V:** Represents the vertical axis of the texture (like the Y-axis).

UV coordinates are typically normalized, meaning they range from 0.0 to 1.0.

*   **U=0.0, V=0.0:** Corresponds to the bottom-left corner of the texture.
*   **U=1.0, V=0.0:** Corresponds to the bottom-right corner of the texture.
*   **U=0.0, V=1.0:** Corresponds to the top-left corner of the texture.
*   **U=1.0, V=1.0:** Corresponds to the top-right corner of the texture.

In a 3D model, each vertex has associated UV coordinates. The shader interpolates these UV coordinates across the surface of the triangle being rendered. This interpolated UV coordinate is then used to sample the texture.

## How Texture Sampling Works in a Shader

Shaders, often written in languages like GLSL (OpenGL Shading Language) or HLSL (High-Level Shading Language), have built-in functions for texture sampling. The core idea involves passing the UV coordinates to a texture object and getting a color back.

Here's a simplified conceptual example in pseudocode, similar to what you might find in GLSL:

```glsl
// Uniforms are variables that are the same for all vertices in a draw call
uniform sampler2D myTexture; // Declares a texture object
uniform vec2 texCoords;     // UV coordinates for the current pixel/fragment

void main() {
    // Sample the texture at the provided UV coordinates
    vec4 texColor = texture(myTexture, texCoords);

    // Use the sampled color to influence the final surface color
    // For example, multiplying the fragment's base color by the texture color
    vec3 finalColor = fragmentBaseColor * texColor.rgb;

    // Assign the final color to the output
    outColor = vec4(finalColor, 1.0);
}
```

**Explanation:**

1.  **`uniform sampler2D myTexture;`**: This declares a variable that will hold our texture. `sampler2D` indicates it's a 2D texture. This `uniform` is typically set from your application code, pointing to a specific image loaded into graphics memory.
2.  **`uniform vec2 texCoords;`**: This represents the interpolated UV coordinates for the current fragment (pixel on the screen).
3.  **`vec4 texColor = texture(myTexture, texCoords);`**: This is the core sampling operation. The `texture()` function takes the texture object (`myTexture`) and the sampling coordinates (`texCoords`) and returns a `vec4` (representing RGBA - Red, Green, Blue, Alpha) color value from the texture.
4.  **`vec3 finalColor = fragmentBaseColor * texColor.rgb;`**: Here, we're using the sampled texture color. `texColor.rgb` extracts the RGB components of the color. We're multiplying it with a base color (`fragmentBaseColor`) that might come from other material properties or lighting calculations. This is a common way to apply a diffuse texture.
5.  **`outColor = vec4(finalColor, 1.0);`**: The `outColor` is the final color written to the render target (the screen).

## Texture Filtering and Addressing Modes

When a UV coordinate falls between pixels, or when a texture is stretched or shrunk, the graphics hardware needs to decide which pixel(s) to use and how to blend them. This is where **texture filtering** comes in.

*   **Nearest Neighbor:** Picks the single closest texel (texture pixel). This is fast but can look blocky.
*   **Bilinear Filtering:** Blends the four nearest texels. This results in smoother transitions.
*   **Trilinear Filtering:** Similar to bilinear, but also blends between mipmap levels (pre-scaled versions of the texture) for better quality at different distances.
*   **Anisotropic Filtering:** A more advanced technique that samples textures at different angles, providing excellent detail for surfaces viewed at oblique angles.

**Addressing Modes** determine what happens when UV coordinates go outside the 0-1 range:

*   **Clamp to Edge:** Repeats the edge pixel value.
*   **Repeat (or Wrap):** Tiles the texture.
*   **Mirror:** Tiles the texture but alternates direction.

These modes are usually configured when the texture is loaded or bound to the shader, not directly in the sampling function itself, but they significantly affect the visual outcome.

## Practical Application

Applying texture sampling is how you achieve realistic surfaces:

*   **Diffuse Texture:** A color texture that defines the base color of a surface (e.g., the pattern on a wooden table).
*   **Normal Map:** A texture where RGB values encode surface normals, allowing for simulated high-frequency surface detail without extra geometry.
*   **Specular Map:** A texture that controls the intensity and color of specular highlights.
*   **Roughness Map:** A texture that controls how rough or smooth a surface is, affecting how light reflects.

By sampling different textures and using their data in various parts of your shader (lighting calculations, color blending, etc.), you can create incredibly diverse and lifelike materials. The key is to understand how the texture's data corresponds to the visual property you want to modify and to use the correct UV coordinates to access that data.

## Supports

- [[skills/digital-media/computer-graphics/shader-programming/microskills/texture-sampling|Texture Sampling]]
