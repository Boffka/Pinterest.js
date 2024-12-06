export function getVisualObject(visual: any) {
  const resource = visual?.resource_response;
  const { data } = resource;
  const visualObject = data?.visual_objects[0];
  const signature = data?.image_signature;
  return {
    visualObject,
    signature,
  };
}
